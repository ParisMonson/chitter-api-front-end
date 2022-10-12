/**
 * @jest-environment jsdom
 */
const PeepView = require("../../views/peep_view");
const PeepModel = require("../../models/peep_model");
const PeepController = require("../../controllers/peep_controller");
const fs = require("fs");
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
jest.mock("../../models/peep_model");
jest.mock("../../views/peep_view");

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  PeepView.mockClear();
  PeepModel.mockClear();
});
it("Initializes", () => {
  const modelMock = new PeepModel();
  const viewMock = new PeepView();
  const controller = new PeepController(modelMock, viewMock);
  expect(controller).toBeDefined();
});
it("On click mocked methods are called once", async () => {
  const modelMock = new PeepModel();
  const viewMock = new PeepView();
  const controller = new PeepController(modelMock, viewMock);
  modelMock.getPeeps.mockReturnValue(Promise.resolve(peepExample));

  const buttonEl = document.querySelector("#get-peeps");
  await buttonEl.click();

  expect(modelMock.getPeeps).toHaveBeenCalledTimes(1);
  expect(viewMock.displayPeeps).toHaveBeenCalledTimes(1);
});
