const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
// const pdfRoute = require("./pdfRoutes");
const morgan = require('morgan')
const path = require('path')
const multer = require('multer');
const url = require('url');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const fs = require("fs");

const CLIENT_ID = '1070330615597-mlj9qtke3mjf5e3802b5qlsaat3qsjbi.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04K3vzjWHBigYCgYIARAAGAQSNwF-L9Ir-rUlVabuEvTLvIOFs00nmD0ckMbQ0k9cFIS1KqyF6ZZWGxpT7R5LX0PWqG_CtVFPeFQ'

env.config();

const port = 8001;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
  // Upload PDF endpoint
  app.post('/upload-pdf', upload.single('pdfFile'), (req, res) => {
    
    const pdfUrl = `https://api.ntfinfotech.com/uploads/${req.file.filename}`;
//     const pdfUrl = `http://localhost:8001/uploads/${req.file.filename}`;
    // Handle the uploaded file, save it, or perform any necessary operations
    // Return the URL of the uploaded PDF file
    res.json({ pdfUrl });
  });
  
  // Send PDF in email endpoint
  app.post('/send-pdf-email', async (req, res) => {
    const { email, pdfUrl } = req.body;
    // console.log(res);
    // console.log(pdfUrl);
    const accessToken = await oAuth2Client.getAccessToken();
    const recipientEmail = req.body.email; // Assuming the email value is sent as req.body.email
    // console.log(recipientEmail);

    const fullUrl = pdfUrl;
    const parsedUrl = new URL(fullUrl);
    const path = parsedUrl.pathname;
    
    // console.log(path);
    const pathToAttachment = `.${path}`;
    const attachment = fs.readFileSync(pathToAttachment); 

    let smtpTransport = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        service: "Gmail",
        // port: 465,
        // secure: true,
        // use_authentication: true,
        auth: {
          type: 'OAuth2',
          user: 'hello@bankopeny.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
        // auth: {
        // user: "",
        // pass: "",
        // },
        // tls: { rejectUnauthorized: false },
    });
    
    smtpTransport.sendMail(
        {
        from: "hello@bankopeny.com",
        to: `${recipientEmail}`,
        bcc:'pawan.mukati@newtechfusion.com',
        subject: "KYC Application Data",
        html: `
        User KYC Application Data, Thanks.`,
        attachments: [
            {
            content: attachment,
            filename: "Kyc-Application-Data.pdf",
            contentType: "application/pdf",
            },
        ],
        },
        function (error, info) {
        if (error) {
            // console.log(error);
        } else {
            res.send("Mail has been sent to the provided email. Check your mail");
        }
        }
    );
  });
  

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
