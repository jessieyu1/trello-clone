const nodemailer = require('nodemailer');
const logger = require('pino')()

function sendEmail(recipientEmail) {
  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'trelloClone@gmail.com',
      pass: 'your-password'
    }
  });

  // Setup email data
  let mailOptions = {
    from: 'trelloClone@gmail.com',
    to: recipientEmail,
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.',
    html: '<b>Hello world!</b>',
    alternatives: [
      {
        contentType: 'text/x-web-markdown',
        content: '**Hello world!**'
      }
    ]
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return logger.info(error.message);
    }
    logger.info('Message sent successfully!', info.messageId);
  });
}

module.exports = sendEmail;