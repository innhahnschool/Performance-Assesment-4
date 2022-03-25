const express = require('express');
const router_teacher = express.Router();
const teacherController = require('../controllers/teacherController');

// Routes
router_teacher.get('/', teacherController.showrecords);
router_teacher.post('/', teacherController.find);
router_teacher.get('/addrecord', teacherController.form);
router_teacher.post('/addrecord', teacherController.create);

router_teacher.get('/showrecordtoedit',teacherController.showrecordtoedit); // new version with ajax

router_teacher.get('/updaterecord',teacherController.updaterecord); // with ajax

router_teacher.get('/viewrecord/',teacherController.viewrecord); // with ajax

router_teacher.get('/showrecordtodelete',teacherController.showrecordtodelete); // with ajax
router_teacher.get('/deleterecord', teacherController.deleterecord); // with ajax

  
module.exports = router_teacher;