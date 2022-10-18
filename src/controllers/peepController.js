const PeepModel = require("../models/peepModel");

class PeepController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  async displayAllPeeps() {
    const peeps = await this.model.getAllPeeps();
    this.view.displayPeeps(peeps);
  }
}

module.exports = PeepController;
