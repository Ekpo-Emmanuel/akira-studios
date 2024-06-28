import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // secure: process.env.EMAIL_SECURE !== "development", // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
} as SMTPTransport.Options);


type sendEmailProps = {
    sender: Mail.Address;
    recipient: Mail.Address[];
    subject: string;
    message: string;
}
// export const sendEmail = async (props: sendEmailProps) => {
//     const { sender, recipient, subject, message } = props
//     await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to: recipient,
//         subject,
//         html: message
//     });
// }
  

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER
}