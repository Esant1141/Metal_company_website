const creds = require('./nodemon.json')

// console.log(creds)

let express = require('express');
let app = express();
let nodemailer = require('nodemailer');
const bodyParser = require('body-parser')

const path = require('path');
const router = express.Router()

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
    port: 587,
    secure: false,
  // service: 'Gmail',
  auth: {
    user: creds.auth.user,
    pass: creds.auth.pass 
  },
});

app.post('/mail', (req, res, next) => {
    var email = req.body.email
    var message = req.body.message
    var number = req.body.number
    var fname = req.body.fname
    var lname = req.body.lname
    

    const mailOptions = {
        from :  `${fname} &nbsp; ${lname}`,
        to : "114101129anjalisaini@gmail.com",
        subject: "Your Customer",
        html: `User_Name : ${fname} &nbsp; ${lname} <br> User_Email: ${email} <br> User_Phone Number: ${number} <br> Message : ${message}`
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if(err){
            res.json({
                status:"err"
            }) 
            console.log(err)
            }
            else {
                res.json({
                    status: "success"
         })
         console.log("Email Sent" + data.response)
        }
    })
})

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages!");
    }
  });

// serve PORT running here
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))