import { MailAdapdter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer .createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2a034c41d73bdc",
    pass: "01de13482d639c"
  }
});

export class NodemailerMailAdapter implements MailAdapdter{
async sendMail({subject, body}: SendMailData){

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Joel Luis <joelluis73@gmail.com>',
    subject,
    html: body,
  });
};
}
