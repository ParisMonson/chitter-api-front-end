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
    return peeps;
  };
  getSinglePeep = async (id) => {
    let peep = null;
    await fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
      .then((response) => response.json())
      .then((peepObject) => {
        peep = peepObject;
      })
      .catch((error) => {
        console.log(error);
      });
    return peep;
  };
}

module.exports = Api;
