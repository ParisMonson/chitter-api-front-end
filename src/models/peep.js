class Peep {
  constructor(peepObject) {
    //Throws an error if argument is not an object
    if (typeof peepObject === "object" && !Array.isArray(peepObject)) {
      this.id = peepObject.id;
      this.body = peepObject.body;
      this.created_at = peepObject.created_at;
      this.updated_at = peepObject.updated_at;
      this.user = peepObject.user;
      this.likes = peepObject.likes;
    } else {
      throw "Initial Argument must be an object";
    }
  }
}

module.exports = Peep;
