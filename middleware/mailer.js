const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_SENDER,
    pass: process.env.MAIL_PASS,
  },
});

const sendMail = ({ name, email, message }) => {
  return transporter.sendMail({
    from: `"${name}" <${process.env.MAIL_SENDER}>`,
    to: process.env.MAIL_USER || process.env.MAIL_SENDER,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: message,
  });
};

module.exports = sendMail;
