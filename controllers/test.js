require('dotenv').config();
const nodemailer = require('nodemailer');
const mailgun = require('mailgun-js');

const sendEmail = async (req, res) => {
  mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_API_DOMAIN,
  });
  const msg = {
    from: 'ajimobikareemah@gmail.com',
    to: 'kareemah4netlify@gmail.com',
    subject: 'First test with mailgun',
    text: 'Testing mailgun',
  };
  // const info = await mailgun().messages().send(msg);
  mailgun()
    .messages()
    .send(msg, (err, body) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Error in sending email' });
      } else {
        console.log(body);
        res.send({ message: 'Email sent successfully' });
      }
    });
  // res.send(info);
};
module.exports = sendEmail;
