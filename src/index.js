const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
// const { handlebars } = require('express-handlebars');
const { engine } = require ('express-handlebars');
const port = 7000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger 
app.use(morgan('combined'));

// template engine
app.engine('hbs', engine({
    extname: "hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'assets/views'));

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('new');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})