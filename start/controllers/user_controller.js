class UserController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.addEventListener();
  }

  addEventListener() {
    const buttonEl = document.querySelector("#signup-button");
    buttonEl.addEventListener("click", () => {
      this.view.addSignupForm();
    });
  }
}

module.exports = UserController;
