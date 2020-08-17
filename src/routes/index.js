const { Router } = require("express");
const router = Router();
const { getPerson, createPerson } = require("../controllers/controller");

//Passing the function controller
router.get("/persons", getPerson);
router.post("/persons", createPerson);

module.exports = router;
