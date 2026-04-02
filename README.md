# Kurshanteringssystem

Ett enkelt och användarvänligt system för att hantera kursinformation, byggt med Node.js, Express och MySQL.

## Funktioner

- Lista alla kurser
- Lägg till nya kurser
- Ta bort befintliga kurser
- Visa detaljerad kursinformation
- Responsiv design som fungerar på alla enheter

## Teknisk stack

- **Backend**: Node.js med Express
- **Databas**: MySQL
- **Frontend**: EJS (Embedded JavaScript templates)
- **Styling**: CSS med responsiv design

## Förutsättningar

För att köra detta projekt behöver du ha följande installerat:

- Node.js
- MySQL Server (konfigurerad på port 3308)
- npm (Node Package Manager)

## Installation

1. Klona detta repository:
```bash
git clone https://github.com/DT207G-Backend-baserad-webbutveckling/moment-1
```

2. Installera beroenden:
```bash
cd moment-1/courseProject
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

4. Skapa en `.env`-fil i `courseProject` utifrån `.env.example` och ange dina lokala databasvärden:
```env
PORT=3006
SESSION_SECRET=valfri-lokal-hemlighet
DB_HOST=localhost
DB_PORT=3308
DB_USER=root
DB_PASSWORD=
DB_NAME=cv
```

## Användning

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
- Mobiltelefoner
- Tablets
- Laptops
- Skrivbordsskärmar

## Render-deploy

Projektet är nu förberett för Render med:

- `process.env.PORT` och bindning till `0.0.0.0`
- miljövariabler för databas och sessionshemlighet
- `npm start` som startkommando
- `render.yaml` i repo-roten med `rootDir: courseProject`
- `healthCheckPath: /healthz`

### Rekommenderade miljövariabler på Render

Ange dessa i Render om du inte använder Blueprint-prompten:

```env
DB_HOST=your-mysql-host
DB_PORT=3306
DB_USER=your-mysql-user
DB_PASSWORD=your-mysql-password
DB_NAME=your-mysql-database
```

`SESSION_SECRET` ska vara ett eget långt slumpmässigt värde och inte samma som databaslösenordet.

### Skapa tjänsten

1. Pusha projektet till GitHub.
2. Skapa en Render `Web Service`.
3. Använd repo-roten som Blueprint-källa eller sätt `Root Directory` till `courseProject`.
4. Om du skapar tjänsten manuellt:

```text
Runtime: Node
Build Command: npm install
Start Command: npm start
```

5. Lägg in miljövariablerna ovan.

### Viktigt om databasen

Om `studentmysql.miun.se` endast tillåter anslutningar från MIUN-nät eller en IP-lista kommer Render inte kunna ansluta förrän Render-tjänstens utgående IP-intervall tillåts. Render visar dessa under tjänstens `Connect`-meny i Dashboard.
