class UserView {
  constructor() {}
  addSignupForm() {
    const formEl = document.createElement("form");
    formEl.setAttribute("id", "signup-form");
    formEl.setAttribute("onsubmit", "userModel.signUp(); return false;");
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
    inputEl.setAttribute("id", "username-signup-input");
    return inputEl;
  }
  createPasswordInputEl() {
    const inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "password");
    inputEl.setAttribute("placeholder", "Password");
    inputEl.setAttribute("id", "password-signup-input");
    return inputEl;
  }
  createSubmitInputEl() {
    const inputEl = document.createElement("input");
    inputEl.setAttribute("id", "signup-submit-button");
    inputEl.setAttribute("type", "submit");
    inputEl.setAttribute("value", "Submit");
    return inputEl;
  }
}

module.exports = UserView;
