class PeepView {
  constructor() {}
  displayPeeps(peeps) {
    console.log();
    peeps.forEach((peep) => {
      const divEl = document.createElement("div");
      divEl.innerHTML = peep.id;

      const mainDivEl = document.querySelector("#main-container");
      mainDivEl.appendChild(divEl);
    });
  }
}

module.exports = PeepView;
