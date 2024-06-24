const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.post("/test", function (req, res) {
  console.log(req.body);
  fs.writeFile("./cv.text", "variable", (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });
  res.json({ j: "ss" });
});

app.listen(3000, () => {
  console.log("meo");
});
