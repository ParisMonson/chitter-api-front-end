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

// '{"user": {"handle":"kay", "password":"mypassword"}}'

// {
//     "handle": [
//         "has already been taken"
//     ]
// }
