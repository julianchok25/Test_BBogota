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

const getPerson = () => {
    console.log("Getting person");
}

/* async function getConnection() {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getConnection }; */
