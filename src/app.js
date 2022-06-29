const express = require('express');
const toolRoute = require('./components/routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const client = require('./db');


client.connect()
client.query('SELECT $1::text as message', ['Connected to Database'], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message) // Connected to Database
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

app.use("/api/v1/tools_list", toolRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

