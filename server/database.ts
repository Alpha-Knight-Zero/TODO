const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "root",//ENTER THE PASSWORD FOR postgres user in your system in place of root
  host: "localhost",
  port: 5432,
  database: "PERN-TODO",
});

export default pool;
