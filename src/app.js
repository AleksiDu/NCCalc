const express = require('express');
const toolRoute = require('../components/routes');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const client = require('../db');
const app = express();

const port = process.env.PORT || 3000;

client.connect()
client.query('SELECT $1::text as message', ['Connected to Database'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Connected to Database
})

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/tools_list", toolRoute);

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

