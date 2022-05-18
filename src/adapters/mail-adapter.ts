export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailAdapdter {
  sendMail: (data: SendMailData) => Promise<void>;
}
