class Api {
  getPeeps = async () => {
    let peeps = null;
    await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((response) => response.json())
      .then((peepsObject) => {
        peeps = peepsObject;
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("About to return peeps" + peeps);
    return peeps;
  };
}

module.exports = Api;
