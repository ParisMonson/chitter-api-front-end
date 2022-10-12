/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const UserView = require("../../views/user_view");

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

it("Initializes", () => {
  const user = new UserView();
  expect(user).toBeDefined();
});
it("adds a form element", () => {
  const user = new UserView();
  user.addSignupForm();
  const formEls = document.querySelectorAll("form");
  expect(formEls.length).toBe(1);
});
it("adds a form element with correct input elements", () => {
  const user = new UserView();
  user.addSignupForm();
  const formEls = document.querySelectorAll("input");
  expect(formEls[0].name).toBe("username");
  expect(formEls[1].name).toBe("password");
});
it("adds a form element with correct input elements", () => {
  const user = new UserView();
  user.addSignupForm();
  const inputEl = document.querySelector("#signup-button");
  expect(inputEl.type).toBe("submit");
});
