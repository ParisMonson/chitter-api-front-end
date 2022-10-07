class UserModel {
  constructor() {}

  async signUp(user) {
    const response = fetch(
      "https://chitter-backend-api-v2.herokuapp.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    return response;
  }
}

module.exports = UserModel;
