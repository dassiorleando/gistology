/**
 * NodeJS entry file to initialize the App
 * @author dassiorleando
 */
// Get dependencies
var express = require('express'),
  path = require('path'),
  http = require('http'),
  cors = require('cors'),
  bodyParser = require('body-parser'),

  // Get gist route
  api = require('./server/routes/api'),
  app = express();

// Enable CORS for all routes
app.use(cors());

/**
 * Create HTTP server.
 */
var server = http.createServer(app);
// Socket.io for real time communication
var io = require('socket.io').listen(server);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

/**
 * Socket events
 */
io.sockets.on('connection', function(socket){
  console.log('Socket connected');
  // Socket event for gist created
  socket.on('gistSaved', function(gistSaved){
    io.emit('gistSaved', gistSaved);
  });

  // Socket event for gist updated
  socket.on('gistUpdated', function(gistUpdated){
    io.emit('gistUpdated', gistUpdated);
  });
});
