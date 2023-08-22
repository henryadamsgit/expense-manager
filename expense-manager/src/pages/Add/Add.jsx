import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.scss";

const Add = ({ addExpense }) => {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    transaction_id: "",
    price: "",
    company: "",
    balance: "",
    transaction_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });

      if (response.ok) {
        console.log("Transaction added:", transaction);
        navigate("/");
        addExpense(transaction);
      } else {
        console.error("Failed to submit transaction");
        console.log(response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="add">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="transaction_id">Transaction ID:</label>
        <input
          type="text"
          id="transaction_id"
          name="transaction_id"
          value={transaction.transaction_id}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={transaction.price}
          onChange={handleChange}
        />

        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={transaction.company}
          onChange={handleChange}
        />

        <label htmlFor="balance">Balance:</label>
        <input
          type="text"
          id="balance"
          name="balance"
          value={transaction.balance}
          onChange={handleChange}
        />

        <label htmlFor="transaction_date">Transaction Date:</label>
        <input
          type="text"
          id="transaction_date"
          name="transaction_date"
          value={transaction.transaction_date}
          onChange={handleChange}
        />

        <button type="submit">Add Transaction</button>
      </form>

      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default Add;
