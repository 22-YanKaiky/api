const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../../config/smtp");

class EmailService {
  static async send(email) {
    const transporter = nodemailer.createTransport({
      service: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: false,
      auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mail = {
      from: '"Cinemovie" <yankaiky@outlook.com>',
      to: email,
      subject: "Bem vindo Nemonauta",
      text: "Você agora têm acesso ao site Cinemovie - Filmes, Séries e Animes gratuitos",
    };

    transporter.sendMail(mail);
  }
}

module.exports = EmailService;
