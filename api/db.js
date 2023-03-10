import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
  host: "db.vsvbepwqwqngfwvwsvha.supabase.co",
  // port: 5432,
  user: "postgres",
  password: "iwanhanafiah",
  database: "postgres",
});

await client.connect();
console.log("Terhubung ke basis data.");
