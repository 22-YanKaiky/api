const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../../config/smtp");
const WelcomeMail = require("../utils/mails/welcome.user");

class MailService {
  static transporter() {
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

    return transporter;
  }

  static async createUser(email, password) {
    const mail = {
      from: '"Cinemovie" <yankaiky@outlook.com>',
      to: email,
      subject: "Bem vindo Nemonauta",
      text: "Agora você tem acesso a filmes, séries e animes de forma gratuita",
      html: await WelcomeMail.welcome(email, password),
    };

    this.transporter().sendMail(mail);
  }

  /**
   * 
   * @param {*} email => User
   * @param {*} name => Video
   * @param {*} type => Video ["serie", "anime"] - defaut "movie"
   */
  static async newVideo(email, type, name, genre, image) {
    const mail = {
      from: '"Cinemovie" <yankaiky@outlook.com>',
      to: email,
      subject: `Tem ${type === 'serie' ? "série nova" : type === 'anime' ? "anime novo" : "filme novo"} na área`,
      text: `Chegou ${name} para o catálogo ${type === 'serie' ? "das séries" : type === 'anime' ? "dos animes" : "de filmes"}`,
      html: `<div>Muito(a) <strong>${genre}</strong> para você e quem quiser<br /><div style={ display: 'flex', justify-content: 'center' }><img src="${image}" alt="${name}" /></div><br /><a href="https://www.example.com">Clica aqui</a> e divirta-se</div>`,
    };

    this.transporter().sendMail(mail);
  }

  static comingSoon(email) {
    const mail = {
      from: '"Cinemovie" <yankaiky@outlook.com>',
      to: email,
      subject: "Tem noviade chegando!!!",
      html: `<div></div>`,
    };

    this.transporter().sendMail(mail);
  }
}

module.exports = MailService;
