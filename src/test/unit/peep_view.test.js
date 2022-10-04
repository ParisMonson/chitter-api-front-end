/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const PeepView = require("../../views/peep_view");
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
});

it("initializes", () => {
  const view = new PeepView();
  expect(view).toBeDefined();
});
it("displays a peep in html", () => {
  const view = new PeepView();
  const peep = [
    {
      id: 2,
    },
  ];
  view.displayPeeps(peep);
  const divEl = document.querySelectorAll("div");
  expect(divEl.length).toBe(2);
});
