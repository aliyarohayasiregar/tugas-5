import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  host: "db.hcrvgjfythahcmgkcrge.supabase.co",
  // port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "postgres",
});

await client.connect();
console.log("Terhubung ke basis data.");
