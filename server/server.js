const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let jsonData = require('./resources/MOCK_DATA');

app.get("/", (req,res) => {
    res.json(jsonData);
});

app.listen(5000, () => console.log('Listening to port 5000'));
