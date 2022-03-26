const nodemailer = require("nodemailer");

class EmailService {
  static async send(email) {
    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: "yankaiky@outlook.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mail = {
      from: '"© 2022, Cinemovie" <yankaiky@outlook.com>',
      to: email,
      subject: "Bem vindo Nemonauta",
      text: "Você agora têm ao site Cinemovie - Filmes, Séries e Animes gratuitos",
      html: "<img src='https://www.nerdsite.com.br/wp-content/uploads/2022/02/Imagem-Destaca-NS-1-1.jpg' width='100%' height='38%'/>"
    };

    await transporter.sendMail(mail);
  }
}

module.exports = EmailService;
