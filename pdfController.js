// we use html pdf

const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("./document/document");
const {jsPDF} = require("jspdf")
const env = require("dotenv");
const puppeteer = require('puppeteer');

env.config();

exports.createPdf = (req, res) => {
  // const options = {
  //   format: 'A4',
  //   orientation: 'portrait',
  //   border: {
  //     top: '0.5in',
  //     right: '0.5in',
  //     bottom: '0.5in',
  //     left: '0.5in'
  //   }
  // };
  
  // pdf.create(pdfTemplate(req.body), options).toFile('invoice.pdf', (err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send('Error generating PDF');
  //   } else {
  //     res.send('PDF generated successfully!');
  //   }
  // });
  let file = pdfTemplate(req.body);
  fs.writeFileSync('./document/invoice.html', file, 'binary');
  (async () => {
    const browser = await puppeteer.launch({  headless:"new"});
    const page = await browser.newPage();
    let pathStatic = req.protocol + '://' + req.get('host') + "/static/invoice.html";
    await page.goto(pathStatic, {waitUntil: 'networkidle2'});
    await page.pdf({path: 'invoice.pdf', format: 'A4'});
  
    await browser.close();
  })().then(()=>{
    res.send('PDF generated successfully!');
  });

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


