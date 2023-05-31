// we use html pdf

// const pdf = require("html-pdf");
const puppeteer = require('puppeteer');
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();

exports.createPdf = async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Read the HTML template file
    const htmlTemplatePath = path.resolve(__dirname, './document/invoice.html');
    const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf8');

    await page.setContent(htmlTemplate);

    // Wait for any asynchronous content to load
    await page.waitForTimeout(1000);

    const pdfOptions = {
      path: 'invoice.pdf',
      format: 'A4',
      printBackground: true,
    };

    await page.pdf(pdfOptions);

    await browser.close();

    res.send('PDF generated successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
};


// ------
exports.fetchPdf = (req, res) => {
  res.sendFile(path.join(__dirname, "invoice.pdf"));
};

exports.sendPdf = (req, res) => {
  const recipientEmail = req.body.email; // Assuming the email value is sent as req.body.email
  console.log(req.body);
  pathToAttachment = path.join(__dirname, "invoice.pdf");
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    port: 465,
    secure: true,
    use_authentication: true,
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
      // cc:'hello@bankopeny.com',
      subject: "KYC Application Data",
      html: `
      User KYC Application Data, Thanks.`,
      attachments: [
        {
          content: attachment,
          filename: "invoice.pdf",
          contentType: "application/pdf",
          path: pathToAttachment,
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


