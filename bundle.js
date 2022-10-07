(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/models/peep_model.js
  var require_peep_model = __commonJS({
    "src/models/peep_model.js"(exports, module) {
      var PeepModel2 = class {
        constructor() {
        }
        async getPeeps() {
          let peeps = null;
          await fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((peepsObject) => {
            peeps = peepsObject;
          }).catch((error) => {
            console.error(error);
          });
          console.log("About to return peeps" + peeps);
          return peeps;
        }
      };
      module.exports = PeepModel2;
    }
  });

  // src/views/peep_view.js
  var require_peep_view = __commonJS({
    "src/views/peep_view.js"(exports, module) {
      var PeepView2 = class {
        constructor() {
        }
        displayPeeps(peeps) {
          peeps.forEach((peep) => {
            this.createPeepEl(peep);
          });
        }
        createPeepEl(peep) {
          const divEl = document.createElement("div");
          divEl.classList.add("peep");
          const h3El = this.createTitleEl(peep);
          const pEl = this.createParagraphEl(peep);
          const footerEl = this.createFooterEl(peep);
          divEl.append(h3El, pEl, footerEl);
          document.querySelector("#main-container").appendChild(divEl);
        }
        createParagraphEl(peep) {
          const pEl = document.createElement("p");
          pEl.classList.add("peep-content");
          pEl.innerHTML = peep.body;
          return pEl;
        }
        createTitleEl(peep) {
          const h3El = document.createElement("h3");
          h3El.innerHTML = peep.user.handle;
          return h3El;
        }
        createFooterEl(peep) {
          const footerEl = document.createElement("footer");
          footerEl.innerHTML = `Created at: ${peep.created_at} Updated_at: ${peep.updated_at} Likes: ${peep.likes.length}`;
          return footerEl;
        }
      };
      module.exports = PeepView2;
    }
  });

  // src/controllers/peep_controller.js
  var require_peep_controller = __commonJS({
    "src/controllers/peep_controller.js"(exports, module) {
      var PeepController2 = class {
        constructor(model2, view2) {
          this.model = model2;
          this.view = view2;
          const buttonEl = document.querySelector("#get-peeps");
          buttonEl.addEventListener("click", () => {
            this.displayAllPeeps();
          });
        }
        async displayAllPeeps() {
          const peeps = await this.model.getPeeps();
          this.view.displayPeeps(peeps);
        }
      };
      module.exports = PeepController2;
    }
  });

  // index.js
  var PeepModel = require_peep_model();
  var PeepView = require_peep_view();
  var PeepController = require_peep_controller();
  var model = new PeepModel();
  var view = new PeepView();
  var controller = new PeepController(model, view);
})();
