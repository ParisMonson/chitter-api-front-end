/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const PeepView = require("../../views/peep_view");
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");

const peepExample = [
  {
    id: 1538,
    body: "123",
    created_at: "2022-09-19T16:50:20.747Z",
    updated_at: "2022-09-19T16:50:20.747Z",
    user: {
      id: 1153,
      handle: "ted453",
    },
    likes: [
      {
        user: {
          id: 1153,
          handle: "ted453",
        },
      },
      {
        user: {
          id: 1159,
          handle: "NickLong",
        },
      },
    ],
  },
];

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

it("initializes", () => {
  const view = new PeepView();
  expect(view).toBeDefined();
});
it("creates a peep div element", () => {
  const view = new PeepView();
  view.displayPeeps(peepExample);
  const divEl = document.querySelectorAll(".peep");
  expect(divEl.length).toBe(1);
});
it("creates a peep div element containing the peep body", () => {
  const view = new PeepView();
  view.displayPeeps(peepExample);
  const divEl = document.querySelector(".peep");
  expect(divEl.innerHTML).toContain("123");
});
it("peep div contains all the created_at and Updated_at values ", () => {
  const view = new PeepView();
  view.displayPeeps(peepExample);
  const divEl = document.querySelector(".peep");
  expect(divEl.innerHTML).toContain("2022-09-19T16:50:20.747Z");
  expect(divEl.innerHTML).toContain("2022-09-19T16:50:20.747Z");
});
it("creates a peep div element containing the user", () => {
  const view = new PeepView();
  view.displayPeeps(peepExample);
  const divEl = document.querySelector(".peep");
  expect(divEl.innerHTML).toContain("ted453");
});
it("creates a peep div element containing the number of likes", () => {
  const view = new PeepView();
  view.displayPeeps(peepExample);
  const divEl = document.querySelector(".peep");
  expect(divEl.innerHTML).toContain("Likes: 2");
});
