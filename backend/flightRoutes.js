const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const db = req.db;
  const query = 'SELECT * FROM flights';
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

module.exports = router;
