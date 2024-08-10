const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { jsPDF } = require("jspdf");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/test", function (req, res) {
  res.json({ j: "ss" });
});

app.post("/cvv", async function (req, res) {
  const doc = new jsPDF("p", "pc", "a5");

  console.log("ho");
  if (req.body.names.length === req.body.work.length) {
    doc.setFontSize(20);
    doc.text(`${req.body.names}`, 15.8, 18);

    doc.setFontSize(14);
    doc.text(`${req.body.work}`, 16.5, 20.5);
    doc.setFontSize(11);
    doc.text(`${req.body.num}`, 7.5, 23);
    doc.addImage("location", "png", 10, 10, 10, 10);
    doc.save(`testo.pdf`);
    return;
  }
  doc.setFontSize(22);
  doc.text(`${req.body.names}`, 16.5, 18);

  doc.setFontSize(14);
  doc.text(`${req.body.work}`, 16.4, 20.5);
  doc.setFontSize(11);
  doc.text(`${req.body.num}`, 7.5, 23);
  doc.addImage("location", "png", 10, 10, 10, 10);
  doc.save(`testo.pdf`);

  console.log(req.body, "arwarwr");
  res.json({ jse: "sekjrlwjr" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
