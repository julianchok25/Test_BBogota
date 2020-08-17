const { Router } = require("express");
const router = Router();
const {
  getPerson,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/controller");

// simple route
router.get("/", (req, response) => {
  response.json({ message: "Welcome to the main application" });
});
//Passing the function controller
router.get("/persons", getPerson);
router.get("/persons/:id", getPersonById);
router.post("/persons", createPerson);
router.put("/persons/:id", updatePerson);
router.delete("/persons/:id", deletePerson);

module.exports = router;
