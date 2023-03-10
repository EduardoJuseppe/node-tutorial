require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const conn = require("express-myconnection");
const route = require("./routes/index");
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5001;

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "SqlFringe44ipn1993",
    database: process.env.DB_NAME || "node-tutorial"
}

app.use(conn(mysql, dbConfig, "single"));
app.use(express.json());
app.use('/',route);
app.listen(PORT, () =>{
    console.log(`servidor en puerto ${PORT}`);
});