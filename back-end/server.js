const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { jsPDF } = require("jspdf");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/test", (req, res) => {
  res.json({ j: "ss" });
});

app.post("/cvv", async (req, res) => {
  const doc = new jsPDF("p", "pc", "a5");
  const imagePhonePath = path.join(__dirname, "phone.png");
  const imageMailPath = path.join(__dirname, "mail.jpg");

  try {
    const imagePhoneData = fs.readFileSync(imagePhonePath).toString("base64");
    const phoneImg = `data:image/png;base64,${imagePhoneData}`;
    const imageMailData = fs.readFileSync(imageMailPath).toString("base64");
    const imgMail = `data:image/png;base64,${imageMailData}`;
    function settings(
      emailWidth,
      emailHeight,
      emailImgWidth,
      emailImgHeight,
      numberWidth,
      numberHeight,
      phoneImgWidth,
      phoneImgHeight
    ) {
      doc.text(req.body.email, emailWidth, emailHeight);
      doc.addImage(imgMail, "JPG", emailImgWidth, emailImgHeight, 0.9, 0.9);
      doc.text(req.body.num, numberWidth, numberHeight);
      doc.addImage(phoneImg, "PNG", phoneImgWidth, phoneImgHeight, 0.9, 0.9);
    }
    if (req.body.names.length === req.body.work.length) {
      doc.setFontSize(20);
      doc.text(req.body.names, 16.3, 18);

      doc.setFontSize(14);
      doc.text(req.body.work, 16.5, 20.5);
      doc.setFontSize(11);
      if (req.body.email.length > 13) {
        settings(12, 23, 9.5, 22.2, 10.5, 23, 7, 22.2);
        doc.save("tless.pdf");
        return;
      }
      if (req.body.num.length > 4) {
        settings(12, 23, 9.5, 22.2, 10.5, 23, 7, 22.2);
        doc.save("tless.pdf");
        return;
      }
      doc.save("tless.pdf");
      return;
    }

    doc.setFontSize(22);
    doc.text(req.body.names, 16.5, 18);

    doc.setFontSize(14);
    doc.text(req.body.work, 16.4, 20.5);
    doc.setFontSize(11);
    if (req.body.email.length > 13) {
      settings(12, 23, 9.5, 22.2, 9.5, 23, 7, 22.2);
      doc.save("tless.pdf");
      return;
    }
    if (req.body.num.length > 3) {
      settings(12, 23, 9.5, 22.2, 11.5, 23, 7, 22.2);
      doc.save("tless.pdf");
      return;
    }
    console.log("3mk");

    doc.save("tless.pdf");

    res.json({ jse: "sekjrlwjr" });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res
      .status(500)
      .json({ error: "An error occurred while generating the PDF" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
