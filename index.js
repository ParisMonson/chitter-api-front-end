const PeepModel = require("./src/models/peep_model");
const PeepView = require("./src/views/peep_view");
const PeepController = require("./src/controllers/peep_controller");

const model = new PeepModel();
const view = new PeepView();
const controller = new PeepController(model, view);
