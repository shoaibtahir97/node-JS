const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on localhost:3000");
});

app.use("/", (req, res) => {
  res.send("kese ho");
});
