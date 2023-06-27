const nodemailer = require("nodemailer");

exports.SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  try {
    let transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_APP_EMAIL, // host gmail acc
        pass: process.env.GMAIL_APP_PASSWORD, // host gmail app password. This is not gmail account password.
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL_ADDRESS, // sender address
      to: EmailTo, // list of receivers
      subject: EmailSubject, // Subject line
      text: EmailText, // plain text body
    };

    await transporter.sendMail(mailOptions);

    console.log("Success".bgGreen, "Email sent");
  } catch (error) {
    console.log(error);
  }
};
