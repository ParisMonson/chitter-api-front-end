class UserModel {
  constructor() {}

  async signUp() {
    console.log("inside signUp");
    const user = this.createSignUpObject();
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
  createSignUpObject() {
    const usernameInputValue = document.getElementById(
      "username-signup-input"
    ).value;
    const passwordInputValue = document.getElementById(
      "password-signup-input"
    ).value;
    // '{"user": {"handle":"kay", "password":"mypassword"}}'
    const signUpObject = {
      user: {
        handle: usernameInputValue,
        password: passwordInputValue,
      },
    };
    return signUpObject;
  }
}

module.exports = UserModel;
