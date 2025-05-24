// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let playersData = {
  test1: 20082008,  // حساب جاهز للاختبار
};

app.post('/update', (req, res) => {
  const { player, score } = req.body;
  if (!player || !score) {
    return res.status(400).json({ error: 'Missing player or score' });
  }
  playersData[player] = score;
  res.json({ status: 'success' });
});

app.get('/players', (req, res) => {
  res.json(playersData);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
