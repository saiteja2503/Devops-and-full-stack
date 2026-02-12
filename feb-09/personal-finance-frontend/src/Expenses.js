import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseData, setExpenseData] = useState({
    name: '',
    amount: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching expenses:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData({
      ...expenseData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/expenses', expenseData)
      .then(response => {
        setExpenses([...expenses, response.data]);
        setExpenseData({ name: '', amount: '' });
      })
      .catch(error => {
        console.error('Error adding expense:', error);
      });
  };

  return (
    <div>
      <h2>Expenses</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={expenseData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expenseData.amount}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Expense</button>
      </form>

      <hr />

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - ₹{expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
