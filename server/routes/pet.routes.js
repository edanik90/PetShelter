const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get("/api/pets", PetController.getAll);
    app.get("/api/pet/:id", PetController.getOne);
    app.post("/api/pet/new", PetController.create);
    app.put("/api/pet/:id", PetController.update);
    app.delete("/api/pet/:id", PetController.destroy);
}