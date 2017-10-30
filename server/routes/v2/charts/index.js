'use strict';
const express = require('express'),
      router = express.Router(),
      // TODO: refactor
      parsers = require('../../../helpers/parsers'),
      Note = require('../../../models/note');

router.get('/bars', (req, res) => {
  Note.aggregate([
    {
      $group: {
        _id: "$url",
        count: {$sum: 1}
      }
    }
  ], (err, result) => {
    if(err) {
      res.status(500).json([]);
    } else {
      // try-catch
      res.status(200).json(parsers.parseBars(result));
    }
  });
});


module.exports = router;
