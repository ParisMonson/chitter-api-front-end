class PeepController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    const buttonEl = document.querySelector("#get-peeps");
    buttonEl.addEventListener("click", () => {
      this.displayAllPeeps();
    });
  }
  async displayAllPeeps() {
    const peeps = await this.model.getPeeps();
    this.view.displayPeeps(peeps);
  }
}

module.exports = PeepController;
