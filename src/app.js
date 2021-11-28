const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.port || 3000;

// getting path
const view_path = path.join(__dirname, "../template/views");
const static_path = path.join(__dirname, "../public");
const partial_path = path.join(__dirname, "../template/partials");

// setting to hbs
app.set('view engine', 'hbs');
app.set('views', view_path);
hbs.registerPartials(partial_path);

//for using static file
app.use(express.static(static_path));

app.get("/", (req, res)=>{
    res.render('index');
});

app.get("/weather", (req, res)=>{
    res.render('weather');
});

app.get("/quotes", (req, res)=>{
    res.render('quotes');
});

app.get("/contact", (req, res)=>{
    res.render('contact');
});

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});