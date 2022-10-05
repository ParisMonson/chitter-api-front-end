class PeepView {
  constructor() {}
  displayPeeps(peeps) {
    peeps.forEach((peep) => {
      this.createPeepEl(peep);
    });
  }
  createPeepEl(peep) {
    const divEl = document.createElement("div");
    divEl.classList.add("peep");

    const h3El = this.createTitleEl(peep);
    const pEl = this.createParagraphEl(peep);
    const footerEl = this.createFooterEl(peep);
    divEl.append(h3El, pEl, footerEl);

    document.querySelector("#main-container").appendChild(divEl);
  }
  createParagraphEl(peep) {
    const pEl = document.createElement("p");
    pEl.innerHTML = peep.body;
    return pEl;
  }
  createTitleEl(peep) {
    const h3El = document.createElement("h3");
    h3El.innerHTML = peep.user.handle;
    return h3El;
  }
  createFooterEl(peep) {
    const footerEl = document.createElement("footer");
    footerEl.innerHTML = `Created at: ${peep.created_at} Updated_at: ${peep.updated_at} Likes: ${peep.likes.length}`;
    return footerEl;
  }
}

module.exports = PeepView;
