const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { dirname } = require("path");
const app = express();
app.use(express.json());
app.use(cors());
let nums = 0;
app.post("/test", function (req, res) {
  let fileText = `${req.body.names}`;

  console.log(req.body);
  fs.writeFile(`./cv${nums++}.text`, fileText, (err) => {
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
