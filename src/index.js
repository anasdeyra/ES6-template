import express from "express";

const app = express();

app.listen(4000, () => {
  console.clear();
  console.log("\x1b[1mServer is running \x1b[34mhttp://localhost:4000\x1b[0m");
});

app.get("/", (req, res) => {
  res.status(200).send("server working fine!");
});
