class UserView {
  constructor() {}
  addSignupForm() {
    const formEl = document.createElement("form");
    const usernameInputEl = this.createUsernameInputEl();
    const passwordInputEl = this.createPasswordInputEl();
    const submitInputEl = this.createSubmitInputEl();
    formEl.append(usernameInputEl, passwordInputEl, submitInputEl);
    document.querySelector("#main-container").appendChild(formEl);
  }
  createUsernameInputEl() {
    const inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "username");
    inputEl.setAttribute("placeholder", "Username");
    return inputEl;
  }
  createPasswordInputEl() {
    const inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "password");
    inputEl.setAttribute("placeholder", "Password");
    return inputEl;
  }
  createSubmitInputEl() {
    const inputEl = document.createElement("input");
    inputEl.setAttribute("id", "signup-button");
    inputEl.setAttribute("type", "submit");
    inputEl.setAttribute("value", "Submit");
    return inputEl;
  }
}

module.exports = UserView;
