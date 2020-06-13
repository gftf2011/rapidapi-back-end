const app = require('./app');

const { config } = require('dotenv');

config();

app.listen(process.env.PORT || 3333);
