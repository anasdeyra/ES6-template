import express from "express";

const app = express();

app.listen(4000, () => {
  console.log("server started at http://localhost:4000");
});

app.get("/", async (req, res) => {
  let s = 0;
  for (var i = 0; i < 9999999; i++) {
    s = i;
  }
  const f = `aaaa ${await s}`;
  res.status(200).send(f);
});
