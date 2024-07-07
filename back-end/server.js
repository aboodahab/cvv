const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

app.post("/files", upload.single("file"), (req, res) => {
  console.log(req.body, "youtube.cm");

  res.json({ message: "File uploaded successfully!" });
});
// app.use("/uploads", express.static(__dirname + "/uploads"));
app.listen(3000, () => {
  console.log("meo");
});
