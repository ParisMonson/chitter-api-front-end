/* eslint-env jest */
import fetchMock from "jest-fetch-mock";
const Api = require("../Api");

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});
describe("Api Unit Tests", () => {
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
  it("fetches a single tweet", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        body: "my first peep :)",
        created_at: "2018-06-23T13:12:29.945Z",
        updated_at: "2018-06-23T13:12:29.945Z",
        user: {
          id: 1,
          handle: "kay",
        },
        likes: [],
      })
    );
    const api = new Api();
    const peep = await api.getSinglePeep(1);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(peep).toEqual({
      id: 1,
      body: "my first peep :)",
      created_at: "2018-06-23T13:12:29.945Z",
      updated_at: "2018-06-23T13:12:29.945Z",
      user: {
        id: 1,
        handle: "kay",
      },
      likes: [],
    });
  });
});
