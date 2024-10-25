# 📚 Kurshanteringssystem

Ett enkelt och användarvänligt system för att hantera kursinformation, byggt med Node.js, Express och MySQL.

## ✨ Funktioner

- 📝 Lista alla kurser
- ➕ Lägg till nya kurser
- 🗑️ Ta bort befintliga kurser
- 🔍 Visa detaljerad kursinformation
- 📱 Responsiv design som fungerar på alla enheter

## 🛠️ Teknisk Stack

- **Backend**: Node.js med Express
- **Databas**: MySQL
- **Frontend**: EJS (Embedded JavaScript templates)
- **Styling**: CSS med responsiv design

## 📋 Förutsättningar

För att köra detta projekt behöver du ha följande installerat:

- Node.js
- MySQL Server (konfigurerad på port 3308)
- npm (Node Package Manager)

## 🚀 Installation

1. Klona detta repository:
```bash
git clone [repository-url]
```

2. Installera beroenden:
```bash
cd [projekt-mapp]
npm install
```

3. Skapa en MySQL-databas som heter `cv` och kör följande SQL för att skapa tabellen:
```sql
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coursecode VARCHAR(10) NOT NULL UNIQUE,
    coursename VARCHAR(100) NOT NULL,
    progression VARCHAR(5) NOT NULL,
    syllabus VARCHAR(255) NOT NULL
);
```

4. Uppdatera databasanslutningen i `app.js` om nödvändigt:
```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cv",
  port: "3308"
});
```

## 🎯 Användning

1. Starta applikationen:
```bash
node app.js
```

2. Öppna webbläsaren och gå till:
```
http://localhost:3006
```

## 💡 Funktionalitet

### Visa Kurser
- Visar alla kurser i en responsiv grid-layout
- Varje kurs visar kurskod, kursnamn, progression och länk till kursplan
- Möjlighet att ta bort kurser direkt från listan

### Lägg till Kurs
- Formulär för att lägga till nya kurser
- Validering på både klient- och serversidan
- Kontroll av unika kurskoder
- Felhantering med användarvänliga meddelanden

### Om-sida
- Information om applikationen och dess syfte
- Beskrivning av teknisk implementation

## 🔒 Säkerhet

- Validering av användarinput
- Parametriserade SQL-frågor för att förhindra SQL-injektion
- Felhantering för databasoperationer

## 🎨 Design

- Modern och minimalistisk design
- Responsiv layout som anpassar sig till olika skärmstorlekar
- Konsekvent färgschema och typografi
- Hover-effekter för bättre användarupplevelse

## 🛡️ Felhantering

- Omfattande felhantering för databasoperationer
- Användarvänliga felmeddelanden
- Graceful shutdown vid serveravstängning

## 📱 Responsiv Design

Applikationen är fullständigt responsiv och optimerad för:
- 📱 Mobiltelefoner
- 📱 Tablets
- 💻 Laptops
- 🖥️ Skrivbordsskärmar
