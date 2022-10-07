const UserModel = require("../../models/user_model");
const fetchMock = require("jest-fetch-mock");

fetchMock.enableMocks();

const successObject = {
  id: 1,
  handle: "kay",
};
const failObject = {
  handle: ["has already been taken"],
};

beforeEach(() => {
  fetch.resetMocks();
});

it("Initializes", () => {
  const model = new UserModel();
  expect(model).toBeDefined();
});

it("returns a a success Object", async () => {
  fetch.mockResponseOnce(JSON.stringify(successObject));
  const model = new UserModel();
  const response = await model.signUp({});
  expect(response).toEqual(successObject);
});
it("returns a a fail Object", async () => {
  fetch.mockResponseOnce(JSON.stringify(failObject));
  const model = new UserModel();
  const response = await model.signUp({});
  expect(response).toEqual(failObject);
});

// '{"user": {"handle":"kay", "password":"mypassword"}}'

// {
//     "handle": [
//         "has already been taken"
//     ]
// }
