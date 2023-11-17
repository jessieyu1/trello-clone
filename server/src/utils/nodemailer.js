const nodemailer = require('nodemailer')
const config =  require('../config/index')
// create reusable transporter object using the default SMTP transport
module.exports.sendEmail = async (to, subject, text,from='clmkathy@gmail.com') => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: 'clmkathy@gmail.com',
      pass: config.GMAIL_PASSWORD,
    },
    secure: true,
  })

  // Message options
  let mailData = {
    from: from,
    to: to,
    subject: subject,
    text: text,
  }
  try {
    //send mail
    const info = await transporter.sendMail(mailData)
    return info // 返回成功时的信息
  } catch (error) {
    console.log(error) // 抛出错误
  }
}
