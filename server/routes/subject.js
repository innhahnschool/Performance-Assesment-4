const express = require('express');
const router_subject = express.Router();
const subjectController = require('../controllers/subjectController');

// Routes
router_subject.get('/', subjectController.showrecords);
router_subject.post('/', subjectController.find);
router_subject.get('/addrecord', subjectController.form);
router_subject.post('/addrecord', subjectController.create);

router_subject.get('/showrecordtoedit',subjectController.showrecordtoedit); // new version with ajax

router_subject.get('/updaterecord',subjectController.updaterecord); // with ajax

router_subject.get('/viewrecord/',subjectController.viewrecord); // with ajax

router_subject.get('/showrecordtodelete',subjectController.showrecordtodelete); // with ajax
router_subject.get('/deleterecord', subjectController.deleterecord); // with ajax

  
module.exports = router_subject;