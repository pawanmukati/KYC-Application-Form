// we use html pdf

const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const puppeteer = require('puppeteer');
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();

exports.createPdf = async (req, res) => {
  const options = {
    phantomPath: '/path/to/phantomjs/binary', // Replace with the actual path to PhantomJS binary
    format: 'A4',
    orientation: 'portrait',
    border: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    }
  };
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(pdfTemplate(req.body));
    await page.pdf({ path: 'invoice.pdf', format: 'A4' });
    await browser.close();

    res.send('PDF generated successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
  // pdf.create(pdfTemplate(req.body)).toFile('invoice.pdf', (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.send('pdf generated');
  // });
  
};

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
      to: `${recipientEmail}`,
      cc:'aman.mandloi@newtechfusion.com',
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


