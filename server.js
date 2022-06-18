const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const { Client } = require('pg');
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: process.env.PGPASSWORD,
    database: "postgres"
});

client.connect()
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Hello World!
    client.end()
})

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

