const express = require('express');
const bodyParser = require('body-parser');

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

