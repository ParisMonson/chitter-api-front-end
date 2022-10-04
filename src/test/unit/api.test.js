const Api = require("../../controllers/api");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it("Initializes", () => {
  const api = new Api();
  expect(api).toBeDefined();
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
  const api = new Api();
  const peeps = await api.getPeeps();
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
