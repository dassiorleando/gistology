/**
 * Gists resource
 * @author dassiorleando
 */
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  status = require('http-status'),
  Gist = require('../models/gist');

/* GET a gist by its ID. */
router.get('/:gistId', (req, res) => {
  var gistId = req.params.gistId;

  // Check first if it's a valid Id
  if (!mongoose.Types.ObjectId.isValid(gistId)) {
    return res.status(400).send({
      message: 'Gist Id is invalid'
    });
  }

  // Looking at the gist with the specified ID
  Gist.findById(gistId, function(err, gistFounded) {
    if (err) return res.status(status.BAD_REQUEST).json(err);
    // We serve as json the gist founded
    res.status(status.OK).json(gistFounded);
  });
});

/* POST: save a new gist */
router.post('/', (req, res) => {
  // Incoming data
  var data = req.body;

  // create a new gist
  var newGist = new Gist(data);

  // save the gist
  newGist.save(function(err, gist) {
    if (err) return res.status(status.BAD_REQUEST).json(err);
    res.status(status.OK).json(gist);
  });
});

/* PUT: update an existing gist */
router.put('/', (req, res) => {
  var data = req.body;
  var id = data._id;

  // Properties to update into an exiting gist
  var gistToUpdate = {
    title         : data.title,
    description   : data.description,
    technologies  : data.technologies,
    link          : data.link
  };

  // find the gist with id :id
  Gist.findByIdAndUpdate(id, gistToUpdate, function(err, gistUpdated) {
    if (err) return res.status(status.BAD_REQUEST).json(err);

    // The gist has been successfully updated
    res.status(status.OK).json(gistUpdated);
  });
});

/* GET all saved gists */
router.get('/', (req, res) => {
  Gist.find({}, function(err, gists) {
    if (err) return res.status(status.BAD_REQUEST).json(err);

    // object of all the gists
    res.status(status.OK).json(gists);
  });
});

/* DELETE: delete a gist by id */
router.delete('/:gistId', (req, res) => {
  var gistId = req.params.gistId;

  // Check first if it's a valid Id
  if (!mongoose.Types.ObjectId.isValid(gistId)) {
    return res.status(400).send({
      message: 'Gist Id is invalid'
    });
  }

  // find the gist by id and remove it
  Gist.findByIdAndRemove(gistId, function(err) {
    if (err) return res.status(status.BAD_REQUEST).json(err);

    // The gist has been deleted
    res.status(status.OK).json({ message: 'SUCCESS' });
  });
});

module.exports = router;
