const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../../config/smtp");

class EmailService {
  static async send(email, password) {
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
      text: `Agora você tem acesso a filmes, séries e animes de forma gratuita`,
      html: `<div>ESta é sua senha: <strong>${password}</strong><br />
        É só acessar o link <a href="https://www.example.com">www.example.com</a> para editá-la<br />

        <div style={ display: 'flex', justify-content: 'center' }>
          <img src="https://i.pinimg.com/originals/2f/88/a9/2f88a9427474343f7275e3b8f6fcc2e1.jpg" alt="Catálogo de videos, imagem fictícia"/><br/>
        </div>

        Divirta-se!
      </div>`,
    };

    transporter.sendMail(mail);
  }
}

module.exports = EmailService;
