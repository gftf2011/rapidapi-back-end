const nodemailer = require('nodemailer');
const expressHandlebars = require('express-handlebars');
const nodemailerExpressHandlebars = require('nodemailer-express-handlebars');
const { resolve } = require('path');

const mailConfig = require('../config/nodemailer');

class Mail {
  constructor() {
    const { host, port, auth, secure } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });

    this.configureTemplates();
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

    this.transporter.use(
      'compile',
      nodemailerExpressHandlebars({
        viewEngine: expressHandlebars.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

module.exports = new Mail();
