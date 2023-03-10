import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  // host: "localhost",
  // port: 5432,
  user: "postgres",
  password: "integer",
  database: "integer",
});

await client.connect();
console.log("Terhubung ke basis data.");
