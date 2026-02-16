const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let expenses = [
  { id: 1, title: "Groceries", amount: 500 },
  { id: 2, title: "Fuel", amount: 300 },
];

let income = [
  { id: 1, source: "Salary", amount: 10000 },
  { id: 2, source: "Freelance", amount: 2000 },
];

function getDashboardSummary() {
  const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0);
  const totalIncome = income.reduce((s, i) => s + i.amount, 0);
  return {
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
  };
}

app.get("/api/dashboard", (req, res) => {
  res.json(getDashboardSummary());
});

app.post("/api/expenses", (req, res) => {
  expenses.push(req.body);
  res.status(201).json(req.body);
});

app.post("/api/income", (req, res) => {
  income.push(req.body);
  res.status(201).json(req.body);
});

const _internal = {
  reset() {
    expenses = [
      { id: 1, title: "Groceries", amount: 500 },
      { id: 2, title: "Fuel", amount: 300 },
    ];
    income = [
      { id: 1, source: "Salary", amount: 10000 },
      { id: 2, source: "Freelance", amount: 2000 },
    ];
  },
};

module.exports = app;
module.exports._internal = _internal;
