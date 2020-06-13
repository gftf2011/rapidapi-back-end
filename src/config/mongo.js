const { config } = require('dotenv');

config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const uri = 
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@todocluster-sfdh5.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

module.exports = {
    options,
    uri,
};
