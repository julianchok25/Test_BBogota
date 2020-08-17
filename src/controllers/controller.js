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

module.exports = { getPerson, createPerson };
