const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { jsPDF } = require("jspdf");
const { createCanvas, loadImage } = require("canvas");
const canvg = require("canvg");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/test", function (req, res) {
  res.json({ j: "ss" });
});

app.post("/cvv", async function (req, res) {
  try {
    const svgPath = "call-outline.svg";
    const svgContent = fs.readFileSync(svgPath, "utf8");

    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext("2d");

    // Use canvg with the canvas context and SVG content
    canvg(canvas, svgContent, {
      ignoreMouse: true,
      ignoreAnimation: true,
      ignoreDimensions: true,
    });

    const pngBuffer = canvas.toBuffer("image/png");
    const pngBase64 = pngBuffer.toString("base64");
    const imageFormat = "PNG";

    const doc = new jsPDF("p", "mm", "a4");

    doc.addImage(pngBase64, imageFormat, 10, 10, 100, 100);
    doc.setFontSize(22);
    doc.text(`${req.body.names}`, 19, 14);
    doc.setFontSize(14);
    doc.text(`${req.body.work}`, 19.5, 16);
    doc.setFontSize(12);
    doc.text(`${req.body.num}`, 10.5, 19);

    doc.save(`ess.pdf`);

    console.log(req.body, "arwarwr");
    res.json({ jse: "sekjrlwjr" });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({ error: "Failed to generate PDF" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
