'use strict';
const express = require('express'),
      router = express.Router(),
      Note = require('../../../models/note');

router.post('/', (req, res) => {
  let note = new Note();
  note.category = req.body.category;
  note.title = req.body.title;
  note.url = req.body.url;
  note.save( err => {
    if(err) {
      res.send([]);
    } else {
      res.io.emit('NoteAdded', note );
      res.status(200).json(note);
    }
  });
});

router.get('/', (req, res) => {
  Note.find((err, notes) => {
    if(err) {
      res.send([]);
    } else {
      res.json(notes);
    }
  });
});

module.exports = router;
