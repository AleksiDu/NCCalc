const express = require('express');
const exphbs = require('exphbs');
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

// Templating Engine
app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index');
})

// app.get('/', (req, res) => {
//     res.sendFile(process.cwd() + '/index.html');
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

