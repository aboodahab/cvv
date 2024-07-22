const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { jsPDF } = require("jspdf");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/test", function (req, res) {
  const doc = new jsPDF();
  // doc.text("Hello world!", 10, 10);
  // doc.save("a4.pdf");
  res.json({ j: "ss" });
});

app.listen(3000, () => {
  console.log("meo");
});
