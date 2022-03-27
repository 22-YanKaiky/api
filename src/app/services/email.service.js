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
      from: '"© 2022, Cinemovie" <yankaiky@outlook.com>',
      to: email,
      subject: "Bem vindo Nemonauta",
      text: "Você agora têm acesso ao site Cinemovie - Filmes, Séries e Animes gratuitos",
      html: '<div><h4>Chegou filme novo</h4><h5>The Batman</h5><img src="https://www.nerdsite.com.br/wp-content/uploads/2022/02/Imagem-Destaca-NS-1-1.jpg" width="100%" height="38%"/><a href="https://cinemovie-web.netlify.app/">Só clicar e assistir</a></div>',
    };

    const message = (e) => {
      if (e) {
        console.log(e);
      } else {
        console.log("Email has sent");
      }
    };

    await transporter.sendMail(mail, message);
  }
}

module.exports = EmailService;
