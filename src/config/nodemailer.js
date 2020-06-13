const { config } = require('dotenv');

config();

module.exports = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: `${process.env.GOOGLE_USER}`,
      pass: `${process.env.GOOGLE_PASSWORD}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
    default: {
      from: 'Equipe Rapidapi <noreply@rapidapi.com>',
    },
  };
  