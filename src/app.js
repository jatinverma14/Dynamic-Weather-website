const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;

// getting path
const view_path = path.join(__dirname, "../template/views");
const static_path = path.join(__dirname, "../public");

// setting to hbs
app.set('view engine', 'hbs');
app.set('views', view_path);

//for using static file
app.use(express.static(static_path));

app.get("/", (req, res)=>{
    res.render('index');
});

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
});