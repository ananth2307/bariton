// create reusable transporter object using the default SMTP transport
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "mail.sumplusanalytics.com",
  auth: {
    user: "mailer@sumplusanalytics.com",
    pass: "S_um@12Analyt",
  },
  secure: true,
});

const mailData = {
  from: "murugan.n.test@gmail.com", // sender address
  to: "murugan.n.test@gmail.com", // list of receivers
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: `<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>`,
};

const mailer = (req, res) => transporter.sendMail(mailData, function (err, info) {
    if(err) {
        console.log(err)
        res.status(400).send({message: "Failed!"});
    }
    else {
        res.status(200).send({message: "Success!"});
    }
 });

 module.exports = mailer;