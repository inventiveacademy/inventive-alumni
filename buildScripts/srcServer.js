import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// });

app.get('/', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity pretend this hits a real database
  res.json([
    { id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com' },
    { id: 1, firstName: 'Joe', lastName: 'Shmo', email: 'bob@gmail.com' },
    { id: 1, firstName: 'Samone', lastName: 'Boyd', email: 'bob@gmail.com' }
  ]);
});

app.get('/users', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green('app is listening on port', port));
    open('http://localhost:' + port);
  }
});
