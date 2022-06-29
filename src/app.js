const express = require('express');
const toolRoute = require('../components/routes');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const client = require('../db');
const app = express();

const port = process.env.PORT || 3000;

client.connect()
client.query('SELECT $1::text as message', ['Connected to Database'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Connected to Database
})

app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/tools_list", toolRoute);

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
});

app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

