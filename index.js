/**
 * NodeJS entry file to initialize the App
 * @author dassiorleando
 */
var express = require('express'),
  path = require('path'),
  http = require('http'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  gistAPI = require('./server/resources/gist'),   // Get gists resource
  app = express();

// Simple database connection
var dbURI = process.env.MONGODB_URI || 'mongodb://localhost/gistology';
mongoose.connect(dbURI, { useNewUrlParser: true });

// Enable CORS for all routes
app.use(cors());

// Create the HTTP server
var server = http.createServer(app);

// Socket.io for real time communication
var io = require('socket.io').listen(server);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist folder (dist is resulting from 'ng build')
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api/gists', gistAPI);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Use either the port from the env or 3000
const port = process.env.PORT || '3000';
app.set('port', port);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));

/**
 * Socket events
 */
io.sockets.on('connection', function(socket) {
  console.log('Socket connected');
  
  // Socket event for gist created
  socket.on('gistSaved', function(gistSaved) {
    io.emit('gistSaved', gistSaved);
  });

  // Socket event for gist updated
  socket.on('gistUpdated', function(gistUpdated) {
    io.emit('gistUpdated', gistUpdated);
  });
});
