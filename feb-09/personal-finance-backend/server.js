const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory storage
let expenses = [];

// GET all expenses
app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

// POST new expense
app.post('/api/expenses', (req, res) => {
  const expense = req.body;
  expenses.push(expense);
  res.status(201).json(expense);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
