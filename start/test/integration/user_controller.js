/**
 * @jest-environment jsdom
 */

const UserController = require("../../controllers/user_controller");
const UserModel = require("../../models/user_model");
const UserView = require("../../views/user_view");
const fs = require("fs");

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

it("Initializes", () => {
  const controller = new UserController();
  expect(controller).toBeDefined();
});
it("Initializes with 2 arguments", () => {
  const modelMock = new UserModel();
  const viewMock = new UserView();
  const controller = new UserController(modelMock, viewMock);
  expect(controller).toBeDefined();
});
it("creates form element when button is clicked", async () => {
  const modelMock = new UserModel();
  const viewMock = new UserView();
  const controller = new UserController(modelMock, viewMock);
  const buttonEl = document.querySelector("#signup-button");
  await buttonEl.click();
  const formEls = document.querySelectorAll("form");
  expect(formEls.length).toBe(1);
});
it("when form is submitted it calls signUpSubmit function", async () => {
  const modelMock = new UserModel();
  const viewMock = new UserView();
  const controller = new UserController(modelMock, viewMock);
  const buttonEl = document.querySelector("#signup-button");
  await buttonEl.click();

  const submitInputEl = document.querySelector("#signup-submit-button");
  await submitInputEl.click();
  expect();
});
