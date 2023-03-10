import express from "express";
import { client } from "./db.js";

const app = express();

// middleware

app.use((req, _res, next) => {
  if (req.url === "/bagas") {
    console.log("Bagas");
  }
  console.log(req.url);
  next();
});

// route

app.get("/api/romi", (_req, res) => {
  res.send("romi");
});

app.get("/api/mahasiswa", async (_req, res) => {
  const results = await client.query("SELECT * FROM mahasiswa");
  res.send(results.rows);
});

app.listen(3000, () => {
  console.log("Server berhasil berjalan.");
});
