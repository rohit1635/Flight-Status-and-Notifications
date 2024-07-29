const express = require('express');
const cors = require('cors'); 
const flightRoutes = require('./flightRoutes');
const notificationRoutes = require('./notificationRoutes');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "flight"
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/api/flights', flightRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
