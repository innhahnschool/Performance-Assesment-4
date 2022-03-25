const express = require('express');
const router_student = express.Router();
const studentController = require('../controllers/studentController');

// Routes
router_student.get('/', studentController.showrecords);
router_student.post('/', studentController.find);
router_student.get('/addrecord', studentController.form);
router_student.post('/addrecord', studentController.create);

router_student.get('/showrecordtoedit',studentController.showrecordtoedit); // new version with ajax

router_student.get('/updaterecord',studentController.updaterecord); // with ajax

router_student.get('/viewrecord/',studentController.viewrecord); // with ajax

router_student.get('/showrecordtodelete',studentController.showrecordtodelete); // with ajax
router_student.get('/deleterecord', studentController.deleterecord); // with ajax

  
module.exports = router_student;