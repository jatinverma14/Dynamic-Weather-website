const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const path = require("path");
const hbs = require("hbs");
const { log } = require("console");
const port = process.env.port || 3000;

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting path
const view_path = path.join(__dirname, "../template/views");
const static_path = path.join(__dirname, "../public");
const partial_path = path.join(__dirname, "../template/partials");

// setting to hbs
app.set("view engine", "hbs");
app.set("views", view_path);
hbs.registerPartials(partial_path);

//for using static file
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/quotes", (req, res) => {
  res.render("quotes");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  const contactReqOutput = `
    <p>**New contact request**</p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.yourFirstName} ${req.body.yourLastName}</li>
        <li>Phone: ${req.body.yourNum}</li>
        <li>Email: ${req.body.yourEmail}</li>
        <li><h3>Message:</h3> <p>${req.body.yourMsg}</p></li>
    </ul>
    `;

  var transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
    },
    tls: { rejectUnauthorized: false },
  });

  // send mail with defined transport object
  var mailOptions = {
    from: '"DWW contact" demacc972@gmail.com', // sender address
    to: "jatinverma1410@gmail.com", // list of receivers
    subject: "Hello, New msg from DWW!", // Subject line
    html: contactReqOutput,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err + "errrrr");
      console.log("Err");
    } else {
      alert("Message sent successfully!");
      console.log("succ");
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
