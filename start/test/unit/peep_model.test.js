const PeepModel = require("../../models/peep_model");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("Initializes", () => {
  const model = new PeepModel();
  expect(model).toBeDefined();
});
it("returns a list of peep objects", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        id: 1538,
        body: "123",
        created_at: "2022-09-19T16:50:20.747Z",
        updated_at: "2022-09-19T16:50:20.747Z",
        user: {
          id: 1153,
          handle: "ted453",
        },
      },
    ])
  );
  const model = new PeepModel();
  const peeps = await model.getPeeps();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(peeps).toEqual([
    {
      id: 1538,
      body: "123",
      created_at: "2022-09-19T16:50:20.747Z",
      updated_at: "2022-09-19T16:50:20.747Z",
      user: {
        id: 1153,
        handle: "ted453",
      },
    },
  ]);
});
it("throws an error ", () => {
  const model = new PeepModel();
  expect(model).toBeDefined();
});
