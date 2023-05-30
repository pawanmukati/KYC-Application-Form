const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { jsPDF } = require("jspdf");
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();

exports.createPdf = (req, res) => {
  const doc = new jsPDF();

  const options = {
    format: "A4",
    orientation: "portrait",
    // Adjust margins if needed
    margin: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  };

  const content = pdfTemplate(req.body); // Assuming pdfTemplate returns the HTML content

  doc.html(content, {
    callback: () => {
      doc.save("invoice.pdf");
      res.send("PDF generated successfully!");
    },
    x: options.margin.left,
    y: options.margin.top,
  });
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
