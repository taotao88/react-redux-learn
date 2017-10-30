const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      path = require('path'),
      mongoose = require('mongoose'),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

const config = require('./config.json')[app.get('env')],
      apiV1Charts = require('./routes/v1/charts'),
      apiV2Charts = require('./routes/v2/charts'),
      apiV1Notes = require('./routes/v1/notes');

mongoose.connect('mongodb://'+config.db.host+'/'+config.db.name);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(function(req, res, next) {
  // console.log('origins:', config.allowedOrigins);
  const origin = req.headers.origin;
  if(config.allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  if(origin && origin.length>19 && origin.substring(0,19)==="chrome-extension://"){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  
  res.io = io;
  next();
});

// Always return the main index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

/*
 * Charts API
 */
app.use('/api/v1/charts', apiV1Charts);
app.use('/api/v2/charts', apiV2Charts);

/*
 * Notes API
 */
app.use('/api/v1/notes', apiV1Notes);

server.listen(config.port, () => {
  console.log(`REST API running on ${config.port}!`);
});

// module.exports = server;
