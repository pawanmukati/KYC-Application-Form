// we use html pdf

const pdf = require("html-pdf");
const path = require("path");
const puppeteer = require('puppeteer');
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("./document/document");
const env = require("dotenv");
env.config();


exports.createPdf = async (req, res) => {
  let file = pdfTemplate(req.body);
  fs.writeFileSync('./document/invoice.html', file, 'binary');

  try {
    const browser = await puppeteer.launch({ headless: true });
    
    const page = await browser.newPage();
    console.log(__dirname);

    // Dynamic file path based on parameters or variables
    let dynamicPath = './document';
    let dynamicFileName = 'invoice.html';
    let filePath = path.resolve(__dirname, dynamicPath, dynamicFileName);

    const content = fs.readFileSync(filePath, 'utf8');
    await page.setContent(content);
    const options = {
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    };

    // Inject custom CSS to include bottom border on <td> elements
    await page.addStyleTag({
      content: `
        .for-border td {
          border-bottom: 1px solid black;
        }
      `
    });

    await page.pdf({ path: 'invoice.pdf', ...options });

    await browser.close();

    res.send('PDF generated successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating PDF');
  }
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


