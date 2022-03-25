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
  connection.query('SELECT * FROM Students', (err, rows) => {
    // When done with the connection, release it
    if (!err) {
      let removedUser = req.query.removed;
      res.render('show-students', { rows, removedUser, jscript:'studentclient.js' });
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
  connection.query('SELECT * FROM Students WHERE studentFirstName LIKE ? OR studentLastname LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
    if (!err) 
    {
     res.render('show-students', { rows, jscript:'studentclient.js' });
   } else 
   {
      console.log(err);
    }
   console.log('The data from user table: \n', rows);
  });
}

exports.form = (req, res) => {
  res.render('add-Student');
}

// Add new user
exports.create = (req, res) => {
  const { first_name, last_name, middle_name } = req.body;
  let searchTerm = req.body.search;

  console.log(first_name, last_name, middle_name);

  // User the connection
  connection.query('INSERT INTO Students SET studentFirstName = ?, studentLastname = ?, studentMiddleName = ?', [first_name, last_name, middle_name], (err, rows) => {
    if (!err) {
      res.render('add-student', { alert: 'Student added successfully.', jscript:'studentclient.js'});
    } else {
      console.log(err);
    }
   console.log('The data from user table: \n', rows);
  });
}


// show record to edit (get) show user to edit- new version with ajax
exports.showrecordtoedit = (req, res) => {
  var tid = req.query.id;
  // User the connection
  connection.query('SELECT * FROM Students WHERE studentID = ?',[tid], (err, rows) => {
    if (!err) {
      res.render('edit-student', { rows, jscript:'studentclient.js' });
    } else {
      console.log(err);
    }
    console.log('The data from user table: \n', rows);
  });
}



// Update record (GET) - new version WITH AJAX
exports.updaterecord = (req, res) => {
  //const { first_name, last_name, email, phone, comments } = req.body;
  var tid = req.query.id;
  var fname = req.query.first_name;
  var lname = req.query.last_name;
  var mname = req.query.middle_name;


  console.log(tid, fname, lname, mname);
  //connection
  connection.query('UPDATE Students SET studentFirstName = ?, studentLastname = ?, studentMiddleName = ? WHERE studentID = ?', [fname, lname, mname, tid], (err, rows) => {
    // console.log(err);

  
  });
}

// Show Record to delete- GET - NEW VERSION WITH AJAX
exports.showrecordtodelete = (req, res) => {
  var tid = req.query.id;
  // User connection
  connection.query('SELECT * FROM Students WHERE studentID = ?', [tid], (err, rows) => {
    if (!err) {
      res.render('delete-student', { rows, jscript:'studentclient.js' });
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
  connection.query('delete from Students WHERE studentID= ?', [tid], (err, rows) => {

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

  connection.query('SELECT * FROM Students WHERE studentID=?',[uid], (err, rows) => {  
    if (!err) {
    //  console.log('To render received the data from user id:'+uid+' rows length:'+rows.length);
     res.render('view-students', { rows, jscript:'studentclient.js' });
      
    } else {
     console.log(err);
    }
   console.log('The data from student id: \n rows: \n ',uid, rows);
   // console.log('rows returned:'+rows.length);

  });  

}

