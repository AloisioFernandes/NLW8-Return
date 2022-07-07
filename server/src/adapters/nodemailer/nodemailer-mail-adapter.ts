import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "40fd9e75c4708b",
    pass: "2d66075005cf57"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedback.com>',
      to: 'Aloisio Fernandes <aloisiofernandes067@gmail.com>',
      subject,
      html: body
    })
  }
}

// [
//   `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
//   `<p>Tipo do feedback: ${type}</p>`,
//   `<p>Comentário: ${comment}</p>`,
//   `</div>`
// ].join('\n')