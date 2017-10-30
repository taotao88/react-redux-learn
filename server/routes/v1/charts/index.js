'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json({'status': 'OK'});
  });

router.get('/donuts', (req, res) => {
  res.json({
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  });
});

router.get('/bars', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My Second dataset',
        fillColor: '#0094D6',
        strokeColor: '#0094D6',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ]
  });    
});

router.get('/lines', (req, res) => {
  res.json({
    labels: ['10', '20', '30', '40', '50', '60', '70'],
    datasets: [
      {
        label: 'Singal',
        fillColor: '#F1E7E5',
        strokeColor: '#E8575A',
        pointColor: '#E8575A',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#ff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [10, 55, 69, 45, 87, 68, 74],
      },
      {
        label: 'Disturbance',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [10, 55, 69, 45, 87, 68, 74],
      }
    ]    
  });    
});

module.exports = router;

