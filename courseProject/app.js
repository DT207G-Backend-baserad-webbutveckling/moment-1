require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
<<<<<<< HEAD
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
=======
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
require('dotenv').config();
>>>>>>> b2ea4b3984954cb147a7911ff25fd65418ab41fa

const app = express();
const port = process.env.PORT || 3006;
const sessionSecret = process.env.SESSION_SECRET || "dev-secret-change-me";
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "cv",
  port: Number(process.env.DB_PORT) || 3308,
};

// Grundläggande session setup
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

// Gör flash messages tillgängliga
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

<<<<<<< HEAD
const db = mysql.createConnection(dbConfig);
=======
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});
>>>>>>> b2ea4b3984954cb147a7911ff25fd65418ab41fa

db.connect((error) => {
  if (error) {
    console.error("Fel vid anslutning till databasen:", error);
    return;
  }
  console.log(
    `Ansluten till databasen ${dbConfig.database} på ${dbConfig.host}:${dbConfig.port}!`
  );
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Visa alla kurser
app.get("/", (req, res) => {
  db.query("SELECT * FROM courses", (error, results) => {
    if (error) {
      return res.status(500).render("index", {
        courses: [],
        success_msg: req.flash("success_msg"),
        error_msg: "Ett fel inträffade vid hämtning av kurser.",
      });
    }
    res.render("index", {
      courses: results,
      success_msg: req.flash("success_msg"),
      error_msg: req.flash("error_msg")
    });
  });
});

// Visa lägg till kurs-sidan
app.get("/add-course", (req, res) => {
  res.render("add-course", {
    error: null,
    formData: {}
  });
});

// Lägg till kurs
app.post("/add-course", (req, res) => {
  const { coursecode, coursename, progression, syllabus } = req.body;

  if (!coursecode || !coursename || !progression || !syllabus) {
    return res.render("add-course", {
      error: "Alla fält måste fyllas i",
      formData: req.body
    });
  }

  const sql = 'INSERT INTO courses (coursecode, coursename, progression, syllabus) VALUES (?, ?, ?, ?)';
  db.query(sql, [coursecode, coursename, progression, syllabus], (error) => {
    if (error) {
      req.flash('error_msg', 'Ett fel inträffade vid tillägg av kurs');
      return res.redirect('/add-course');
    }
    req.flash('success_msg', 'Kursen har lagts till!');
    res.redirect('/');
  });
});

// Ta bort kurs
app.post("/delete-course/:id", (req, res) => {
  const sql = "DELETE FROM courses WHERE id = ?";
  db.query(sql, [req.params.id], (error) => {
    if (error) {
      req.flash('error_msg', 'Ett fel inträffade vid borttagning av kurs');
    } else {
      req.flash('success_msg', 'Kursen har tagits bort!');
    }
    res.redirect("/");
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/healthz", (_req, res) => {
  res.status(200).send("ok");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servern lyssnar på port ${port}`);
});
