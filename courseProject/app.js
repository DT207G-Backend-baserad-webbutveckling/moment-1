const express = require("express");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3006;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cv",
  port: "3308"
});

// Anslut till databasen
db.connect((error) => {
  if (error) {
    console.error("Fel vid anslutning till databasen:", error);
    return; 
  }
  console.log("Ansluten till databasen!"); 
});

app.set("view engine", "ejs");
app.use(express.static('/public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
  }
}));
app.use(express.urlencoded({ extended: true }));

// Hantera GET-förfrågan för startsidan
app.get("/", (req, res) => {
  db.query("SELECT * FROM courses", (error, results) => {
    if (error) {
      console.error("Fel vid hämtning av kurser:", error);
      res.status(500).send("Ett fel inträffade vid hämtning av kurser.");
      return;
    }
    res.render("index", { courses: results });
  });
});

// Hanterar GET-förfrågan för att lägga till en ny kurs
app.get("/add-course", (req, res) => {
  res.render("add-course");
});

// Hanterar POST-förfrågan för att lägga till en ny kurs
app.post("/add-course", (req, res) => {
  const { coursecode, coursename, progression, syllabus } = req.body;

    // Validera att alla fält är ifyllda
    if (!coursecode || !coursename || !progression || !syllabus) {
      return res.render("add-course", {
        error: "Alla fält måste fyllas i",
        formData: req.body // Skicka tillbaka den inmatade datan
      });
    }

  const sql = 'INSERT INTO courses (coursecode, coursename, progression, syllabus) VALUES (?, ?, ?, ?)';

  db.query(sql, [coursecode, coursename, progression, syllabus], (error, result) => {
    if (error) {
      console.error("Fel vid tillägg av kurs:", error);
      return res.render("add-course", {
        error: "Ett fel inträffade vid tillägg av kurs",
        formData: req.body
      });
    }
    res.redirect('/'); // Omledning till startsidan efter lyckat tillägg
  });
});

// Hanterar GET-förfrågan för "om oss" sidan
app.get("/about", (req, res) => {
  res.render("about");
});

// Startar servern
app.listen(port, () => {
  console.log(`Servern lyssnar på port ${port}`);
});

process.on('SIGINT', () => {
    console.log('Mottog SIGINT. Stänger ner på ett ordnat sätt...');
    db.end(() => {
      console.log('Databasanslutningar stängda.');
      // Stänger servern
      server.close(() => { 
        console.log('Servern stängd.');
        process.exit(0); 
      });
    });
});
