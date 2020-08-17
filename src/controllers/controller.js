// import directly the class Pool
const { Pool } = require("pg");

// Documentation: https://node-postgres.com/features/connecting
const pool = new Pool({
  host: "127.0.0.1",
  port: "5432",
  user: "admin",
  password: "admin",
  database: "banco-bogota",
});

const getPerson = (req, response) => {
  /*   const response = await pool.query("select * from person");
  //   console.log(response.rows);
  res.status(200).json(response.rows);
  pool.end(); */
  // Using callbacks instead async await
  pool.query("select * from person", (err, res) => {
    if (err) {
      console.log(err);
    }
    // console.log(res.rows);
    response.status(200).json(res.rows);
    // Ending pool sesion for testing purposes
    // pool.end();
  });
};

const createPerson = async (req, response) => {
  if (!req.body.fullname) {
    response.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Using destructuring
  const { fullname, birth } = req.body;
  const res = await pool.query(
    "INSERT INTO person (fullname, birth) VALUES ($1, $2)",
    [fullname, birth]
  );
  console.log(res);
  response.json({
    message: "Person inserted succesfully",
    body: {
      user: { fullname, birth },
    },
  });
};

const getPersonById = async (req, response) => {
  const res = await pool.query("SELECT * FROM person WHERE id = $1", [
    req.params.id,
  ]);
  response.json(res.rows);
};

const updatePerson = async (req, response) => {
  // Here, we need the ID and body data
  const id = req.params.id;
  const { fullname, birth } = req.body;
  const res = await pool.query(
    "UPDATE person SET fullname = $1, birth = $2 WHERE id = $3",
    [fullname, birth, id]
  );
  console.log(res);
  response.json("Person updated succesfully");
};

const deletePerson = async (req, response) => {
  const res = await pool.query("DELETE FROM person WHERE id = $1", [
    req.params.id,
  ]);
  console.log(res);
  // Using template literals
  response.json(`Person ${req.params.id} Deleted Succesfully`);
  // response.send("USER DELETED " + req.params.id);
};

module.exports = {
  getPerson,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
};
