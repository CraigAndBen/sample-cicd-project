const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hello, CI/CD is missing');
})

module.exports = app;