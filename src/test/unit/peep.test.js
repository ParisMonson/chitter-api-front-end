const Peep = require("../../models/peep");

it("initializes with one argument", () => {
  const jsObject = {};
  peep = new Peep(jsObject);
  expect(peep).toBeDefined();
});
it("throws error if initial argument is not an object", () => {
  const jsObject = "";

  expect(() => {
    const peep = new Peep(jsObject);
  }).toThrow("Initial Argument must be an object");
});
it("throws error if initial argument is an array", () => {
  const jsObject = [];

  expect(() => {
    const peep = new Peep(jsObject);
  }).toThrow("Initial Argument must be an object");
});
it("initializes with a json object", () => {
  const jsObject = {
    id: 3,
  };

  peep = new Peep(jsObject);
  expect(peep).toBeDefined();
});
it("id attribute is 3", () => {
  const jsObject = {
    id: 3,
  };
  peep = new Peep(jsObject);
  expect(peep.id).toBe(3);
});
it("all attributes are accessible", () => {
  const jsObject = {
    id: 3,
    body: "my first peep :)",
    created_at: "2018-06-23T13:21:23.317Z",
    updated_at: "2018-06-23T13:21:23.317Z",
    user: {
      id: 1,
      handle: "kay",
    },
    likes: [
      {
        user: {
          id: 1,
          handle: "kay",
        },
      },
    ],
  };
  peep = new Peep(jsObject);
  expect(peep.id).toBe(3);
  expect(peep.body).toBe("my first peep :)");
  expect(peep.created_at).toBe("2018-06-23T13:21:23.317Z");
  expect(peep.updated_at).toBe("2018-06-23T13:21:23.317Z");
  expect(peep.user).toEqual({
    id: 1,
    handle: "kay",
  });
  expect(peep.likes).toEqual([
    {
      user: {
        id: 1,
        handle: "kay",
      },
    },
  ]);
});
