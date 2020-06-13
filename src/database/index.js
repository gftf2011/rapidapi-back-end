const mongoose = require('mongoose');

const { options, uri } = require('../config/mongo');

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.mongoConnection = await mongoose.connect(uri, options);
  }
}

module.exports = new Database();
