const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const pdfRoute = require("./pdfRoutes");
const morgan = require('morgan')

env.config();

const port = 8001;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.use(pdfRoute)

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})
