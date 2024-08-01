const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { jsPDF } = require("jspdf");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/test", function (req, res) {
  // console.log(req.body);
  res.json({ j: "ss" });
});

app.post("/cvv", function (req, res) {
  const doc = new jsPDF("p", "pc", "b5");
  doc.setFontSize(22);
  doc.text(`${req.body.names}`, 19, 14);
  doc.setFontSize(14);
  doc.text(`${req.body.work}`, 19.5, 16);
  doc.setFontSize(12);
  doc.text(`${req.body.num}`, 10.5, 19);

  doc.save(`ess.pdf`);
  console.log(req.body, "arwarwr");
  res.json({ jse: "sekjrlwjr" });
});

app.listen(3000, () => {
  console.log("meo");
});
