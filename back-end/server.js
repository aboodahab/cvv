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

  doc.setFontSize(22);

  if (req.body.names.length < req.body.work.length) {
    console.log("ha");
    doc.text(`${req.body.names}`, 17, 14);
    doc.setFontSize(14);
    doc.text(`${req.body.work}`, 16.5, 16.5);
    doc.setFontSize(11);
    doc.text(`${req.body.num}`, 9.5, 19);

    doc.save(`ess.pdf`);

    return;
  }
  console.log("ho");
  doc.text(`${req.body.names}`, 16.5, 14);

  doc.setFontSize(14);
  doc.text(`${req.body.work}`, 16.5, 16.5);
  doc.setFontSize(11);
  doc.text(`${req.body.num}`, 9.5, 19);
  doc.addSvgAsImage("call-outline.svg", 20, 20, 9, 19);
  doc.save(`ess.pdf`);

  console.log(req.body, "arwarwr");
  res.json({ jse: "sekjrlwjr" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
