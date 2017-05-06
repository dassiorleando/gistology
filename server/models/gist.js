// Let's create the gist schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var gistSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  technologies: [{
      type: String
  }],
  link: {
    type: String,
    required: true
  },
  created_at: Date,
  updated_at: Date
});

// on every save, add the date and edit updated date
gistSchema.pre('save', function(next) {
  // The current date
  var currentDate = new Date();
  
  // edit the updated_at field to the current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

// Create a model from the schema
var Gist = mongoose.model('Gist', gistSchema);

// Exports it to be abailable in all the application
module.exports = Gist;