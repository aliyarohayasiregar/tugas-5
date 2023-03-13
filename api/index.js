import express from "express";
import { client } from "./db.js";

const app = express();

// MIDDLEWARE

app.use((req, res, next) => {
  if (req.headers.authorization === "Bearer abcd") {
    next();
  } else {
    res.status(401);
    res.send("Token salah.");
  }
});

app.use(express.json());
app.use(express.static("public"));

// ROUTE MAHASISWA

// tampilkan semua
app.get("/api/mahasiswa", async (_req, res) => {
  const results = await client.query("SELECT * FROM mahasiswa");
  res.send(results.rows);
});

// tampilkan satu
app.get("/api/mahasiswa/:id", async (req, res) => {
  const results = await client.query(
    `SELECT * FROM mahasiswa WHERE id = ${req.params.id}`
  );
  res.send(results.rows[0]);
});

// tambah
app.post("/api/mahasiswa", async (req, res) => {
  await client.query(
    `INSERT INTO mahasiswa (nim, nama) VALUES ('${req.body.nim}', '${req.body.nama}')`
  );
  res.send("Mahasiswa berhasil ditambahkan.");
});

// edit
app.put("/api/mahasiswa/:id", async (req, res) => {
  await client.query(
    `UPDATE mahasiswa SET nim = '${req.body.nim}', nama = '${req.body.nama}' WHERE id = ${req.params.id}`
  );
  res.send("Mahasiswa berhasil diedit.");
});

// hapus
app.delete("/api/mahasiswa/:id", async (req, res) => {
  await client.query(`DELETE FROM mahasiswa WHERE id = ${req.params.id}`);
  res.send("Mahasiswa berhasil dihapus.");
});

// ROUTE PELATIHAN

app.get("/api/pelatihan", async (_req, res) => {
  const results = await client.query("SELECT * FROM pelatihan");
  res.send(results.rows);
});

app.listen(3000, () => {
  console.log("Server berhasil berjalan.");
});
