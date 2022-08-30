var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = 'chen.stephen141@gmail.com' //change this to be fetched from db by filter(emails of students who are enrolled to that class)
  var message = req.body.message
  var date_time = req.body.date_time
  var venue = req.body.venue
  var class_type = req.body.class_type
  var content = `Your class has been updated!\nName: ${name}\nDate and time: ${date_time}\nVenue: ${venue}\nClass type: ${class_type}\nMessage: ${message}`

  var mail = {
    from: 'chen.stephen151@gmail.com',
    to: email,
    subject: 'Class details updated for ' + name,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
