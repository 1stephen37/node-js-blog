const express = require('express');
const app = express();
const port = 7000;

app.get('/test', (req, res) => {
    res.send('Hello World!, hell girl, qua da,3123131');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})