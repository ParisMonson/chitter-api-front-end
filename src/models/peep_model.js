class PeepModel {
  constructor() {}
  async getPeeps() {
    let peeps = null;
    await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then((peepsObject) => {
        peeps = peepsObject;
      })
      .catch((error) => {
        console.error(error);
      });
    return peeps;
  }
}

module.exports = PeepModel;
