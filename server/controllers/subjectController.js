const mysql = require('mysql');
var url = require('url');

// Connection Pool
let connection = mysql.createConnection({
  host: 'localhost', //process.env.DB_HOST,
  user: 'root', //process.env.DB_USER,
  password: '68416jay', //process.env.DB_PASS,
  database: 'allusers' //process.env.DB_NAME
});

// Show Users
exports.showrecords = (req, res) => {
  // User the connection
  connection.query('SELECT * FROM Subjects', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('show-subjects', { rows, removedUser, jscript:'subjectclient.js' });
    } else {
      console.log(err);
    }
   console.log('The data from user table: \n', rows);
  });
}

// Find User by Search
exports.find = (req, res) => {
  let searchTerm = req.body.search;
  // User the connection
  connection.query('SELECT * FROM Subjects WHERE subjectTitle LIKE ? OR subjectNo LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) 
    {
    res.render('show-subjects', {rows, jscript:'subjectclient.js'});
   } else 
   {
      console.log(err);
    }
   // console.log('The data from user table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-Subject');
}

// Add new user
exports.create = (req, res) => {
  const {subject_title, subject_number, transcript_load, paying_load, teaching_load} = req.body;
  let searchTerm = req.body.search;
  // var sid = req.query.subject_id;
  // var stitle = req.query.subject_title;
  // var sno = req.query.subject_number;
  // var tload = req.query.transcript_load;
  // var pload = req.query.paying_load;
  // var teachload = req.query.teaching_load;

  console.log(subject_title, subject_number, transcript_load, paying_load, teaching_load);

  //User the connection
  connection.query('INSERT INTO Subjects SET subjectTitle = ?, subjectNo = ?, transcriptLoad = ?, payingLoad = ?, teachingLoad = ?', [subject_title, subject_number, transcript_load, paying_load, teaching_load], (err, rows) => {
     if (!err) {
       res.render('add-subject', { alert: 'subject added successfully.', jscript:'subjectclient.js'});
    } else {
      console.log(err);
    }
   console.log('The data from user table: \n', rows);
  });
}


// show record to edit (get) show user to edit- new version with ajax
exports.showrecordtoedit = (req, res) => {
  var sid = req.query.id;
  // User the connection
  connection.query('SELECT * FROM Subjects WHERE subjectID = ?',[sid], (err, rows) => {
    if (!err) {
      res.render('edit-subject', { rows, jscript:'subjectclient.js' });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}




// Update record (GET) - new version WITH AJAX
exports.updaterecord = (req, res) => {
  //const { first_name, last_name, email, phone, comments } = req.body;

  var sid = req.query.id;
  var stitle = req.query.subject_title;
  var sno = req.query.subject_number;
  var tload = req.query.transcript_load;
  var pload = req.query.paying_load;
  var teachload = req.query.teaching_load;



  console.log(stitle, sno, tload, pload, teachload, sid);
  //connection
  connection.query('UPDATE Subjects SET subjectTitle = ?, subjectNo = ?, transcriptLoad = ?, payingLoad = ?, teachingLoad = ? WHERE subjectID = ?', [stitle, sno, tload, pload, teachload, sid], (err, rows) => {
    // console.log(err);

  
  });
}

// Show Record to delete- GET - NEW VERSION WITH AJAX
exports.showrecordtodelete = (req, res) => {
  var sid = req.query.id;
  // User connection
  connection.query('SELECT * FROM Subjects WHERE subjectID = ?', [sid], (err, rows) => {
    if (!err) {
      res.render('delete-subject', { rows, jscript:'subjectclient.js' });
    } else {
      console.log(err);
    }
   console.log('The data from user table: \n', rows);
  });
}


// Delete Record - delete NEW version - WITH AJAX
exports.deleterecord = (req, res) => {
  
  var tid = req.query.id;

  //console.log('to delete id '+ uid);
  // connection
  connection.query('delete from Subjects WHERE subjectID= ?', [tid], (err, rows) => {

    if (err) 
        {
          console.log(err);
          
        }
    
   
  });
  console.log('Deleted record');
}


// View a single record - with AJAX
exports.viewrecord = (req, res) => {

  // User the connection
  var uid = req.query.id;
 // var querystr = 'SELECT * FROM USER WHERE id='+uid;

  connection.query('SELECT * FROM Subjects WHERE subjectID=?',[uid], (err, rows) => {  
    if (!err) {
    //  console.log('To render received the data from user id:'+uid+' rows length:'+rows.length);
     res.render('view-Subjects', { rows, jscript:'subjectclient.js' });
      
    } else {
     console.log(err);
    }
   console.log('The data from subject id: \n rows: \n ',uid, rows);
   // console.log('rows returned:'+rows.length);

  });  

}

