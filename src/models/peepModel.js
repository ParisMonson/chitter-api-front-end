const Api = require("../controllers/api");

class PeepModel {
  constructor() {
    this.api = new Api();
    this.peeps = [];
  }
  async getAllPeeps() {
    this.peeps = await this.api.getPeeps();
    return this.peeps;
  }
}

module.exports = PeepModel;
