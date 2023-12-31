const express = require("express");
const router = express.Router();

class GenresRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    router.post("/", this.controller.postOne.bind(this.controller));
    router.delete("/:id", this.controller.deleteOne.bind(this.controller));
    router.post("/findOrCreate", this.controller.findOrCreateOne.bind(this.controller));
    router.post("/bulkAddInterest/:userId", this.controller.bulkAddGenreInterest.bind(this.controller));
    return router;
  }
}

module.exports = GenresRouter;
