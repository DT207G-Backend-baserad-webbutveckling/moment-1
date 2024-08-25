const express = require("express");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3006;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cv",
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
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

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
