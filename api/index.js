import express from "express";

const app = express();

// middleware

app.use((req, res, next) => {
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

app.listen(3000, () => {
  console.log("berhasil jalan");
});
