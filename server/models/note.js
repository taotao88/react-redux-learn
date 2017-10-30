const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

const NoteModelSchema = new Schema({
  category: { type: String },
  title: { type: String },
  url: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteModelSchema);

// module.exports.NoteModel = NoteModel;



