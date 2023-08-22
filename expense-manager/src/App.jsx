import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Spending from "./pages/Spending/Spending";
import "./App.css";
import Add from "./pages/Add/Add";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      {
        label: "Transaction Price",
        data: [],
      },
    ],
  });

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const url = "http://localhost:8080/all";
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setExpenses(data);

          const labels = data.map((expense) => expense.transaction_date);
          const dataValues = data.map((expense) => expense.price);
          setBarData({
            labels: labels,
            datasets: [
              {
                label: "Transaction Price",
                data: dataValues,
              },
            ],
          });
        } else {
          console.error("Failed to fetch expenses");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage expenses={expenses} barData={barData} />}
        />
        <Route
          path="/spending"
          element={<Spending expenses={expenses} barData={barData} />}
        />
        <Route
          path="/add"
          element={<Add expenses={expenses} addExpense={addExpense} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
