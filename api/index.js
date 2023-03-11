import express from "express";
import { client } from "./db.js";

const app = express();

// middleware

app.use(express.static("public"));

app.use((req, _res, next) => {
  if (req.url === "/bagas") {
    console.log("Bagas");
  }
  console.log(req.url);
  next();
});

// route

app.get("/api/mahasiswa", async (_req, res) => {
  const results = await client.query("SELECT * FROM mahasiswa");
  res.send(results.rows);
});

app.get("/api/pelatihan", async (_req, res) => {
  const results = await client.query("SELECT * FROM pelatihan");
  res.send(results.rows);
});

app.listen(3000, () => {
  console.log("Server berhasil berjalan.");
});
