const { Router } = require("express");
const router = Router();
const {
  getPerson,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/controller");

//Passing the function controller
router.get("/persons", getPerson);
router.get("/persons/:id", getPersonById);
router.post("/persons", createPerson);
router.put("/persons/:id", updatePerson);
router.delete("/persons/:id", deletePerson);

module.exports = router;
