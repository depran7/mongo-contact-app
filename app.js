const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

require("./utils/db");
const Contact = require("./models/contact");

const app = express();
const port = 3000;

// Setup view engine (ejs)
app.set("view engine", "ejs");
app.set("layout", "layouts/main-layout");
app.use(expressLayouts); // Third Party Middleware
app.use(express.static("public")); // Built-in Middleware
app.use(express.urlencoded({ extended: true })); // Built-in Middleware

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

// Halaman Home
app.get("/", (req, res) => {
  const mahasiswa = [];
  res.render("index", {
    nama: "Ade Pranaya",
    title: "Halaman Home",
    mahasiswa
  });
});

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About"
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  const contacts = await Contact.find();

  res.render("contact", {
    title: "Halaman Contact",
    contacts,
    msg: req.flash("msg")
  });
});

// Halaman Detail Contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });

  res.render("detail-contact", {
    title: "Halaman Detail Contact",
    contact
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
