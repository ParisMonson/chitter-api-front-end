// Peeps
const PeepModel = require("./src/models/peep_model");
const PeepView = require("./src/views/peep_view");
const PeepController = require("./src/controllers/peep_controller");
//Users
const UserModel = require("./src/models/user_model");
const UserView = require("./src/views/user_view");
const UserController = require("./src/controllers/user_controller");

const peepModel = new PeepModel();
const peepView = new PeepView();
const peepController = new PeepController(peepModel, peepView);

const userModel = new UserModel();
const userView = new UserView();
const userController = new UserController(userModel, userView);

window.userModel = userModel;
