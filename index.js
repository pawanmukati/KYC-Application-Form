const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const pdfRoute = require("./pdfRoutes");
const morgan = require('morgan')
const path = require('path')
const multer = require('multer');
const url = require('url');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const fs = require("fs");

env.config();

const port = 8001;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
// app.use('/static', express.static(path.join(__dirname, 'document')))
// app.use(pdfRoute)

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
    // Handle the uploaded file, save it, or perform any necessary operations
    // Return the URL of the uploaded PDF file
    res.json({ pdfUrl });
  });
  
  // Send PDF in email endpoint
  app.post('/send-pdf-email', async (req, res) => {
    const { email, pdfUrl } = req.body;
    // console.log(res);
    console.log(pdfUrl);

    const recipientEmail = req.body.email; // Assuming the email value is sent as req.body.email
    console.log(recipientEmail);

    const fullUrl = pdfUrl;
    const parsedUrl = new URL(fullUrl);
    const path = parsedUrl.pathname;
    
    console.log(path);
    const pathToAttachment = `.${path}`;
    const attachment = fs.readFileSync(pathToAttachment); 

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
            filename: "Kyc-data.pdf",
            contentType: "application/pdf",
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
  });
  

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
