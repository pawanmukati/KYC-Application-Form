const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { PDFDocument } = require("pdf-lib");
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();

exports.createPdf = async (req, res) => {
  const htmlContent = pdfTemplate(req.body); // Assuming pdfTemplate returns the HTML content

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();

  await page.pdf(htmlContent, {
    printBackground: true,
  });

  const pdfBytes = await pdfDoc.save();

  fs.writeFileSync("invoice.pdf", pdfBytes);

  res.send("PDF generated successfully!");
};


exports.fetchPdf = (req, res) => {
  res.sendFile(path.join(__dirname, "invoice.pdf"));
};

exports.sendPdf = (req, res) => {
  const recipientEmail = req.body.email; // Assuming the email value is sent as req.body.email
  console.log(req.body);
  const pathToAttachment = path.join(__dirname, "invoice.pdf");
  const attachment = fs.readFileSync(pathToAttachment).toString("base64");

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: "pawan.mukati@newtechfusion.com",
      pass: "Pawan@5842",
    },
    tls: { rejectUnauthorized: false },
  });

  smtpTransport.sendMail(
    {
      from: "pawan.mukati@newtechfusion.com",
      to: `${recipientEmail},pawan.mukati@newtechfusion.com`,
      subject: "KYC Application Data",
      html: `
      User KYC Application Data, Thanks.`,
      attachments: [
        {
          filename: "invoice.pdf",
          contentType: "application/pdf",
          content: Buffer.from(attachment, "base64"),
        },
      ],
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.send("Mail has been sent to the provided email. Check your mail");
      }
    }
  );
};
