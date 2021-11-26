const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;

const view_path = path.join(__dirname, "../template/views");

app.set('view engine', 'hbs');
app.set('views', view_path);

app.get("", (req, res)=>{
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});