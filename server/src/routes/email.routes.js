const { Router } = require('express');
const { sendEmail } = require('../utils/nodemailer'); // 替换为实际的路径
const emailRouter = Router()
// 处理发送邮件的路由
emailRouter.post('/send-email', async (req, res, next) => {
  try {
    // 获取收件人、主题和正文信息
    const { to, subject, text } = req.body;

    const info = await sendEmail('recipient@example.com', 'Subject 1', 'Text 1',);
    // 邮件发送成功的处理逻辑
    res.status(200).send({ message: 'Mail sent successfully' });
  } catch (error) {
    // 邮件发送失败的处理逻辑
    console.error('Error sending email:', error);
    next(error);
  }
});

module.exports = emailRouter
