const express = require ('express');
const app = express();

//app.get('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Bru');
});

app.get('/name/:name' , (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

module.exports = app;