import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enterdTitle, setEnterdTitle] = useState("");
  // const [enterdAmount, setEnterdAmount] = useState("");
  // const [enterdData, setEnterdData] = useState("");

  const [userInput, setUserInput] = useState({
    enterdTitle: "",
    enterdAmount: "",
    enterdData: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enterdTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enterdAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enterdData: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enterdTitle,
      amount: userInput.enterdAmount,
      date: new Date(userInput.enterdData),
    };

    props.onSaveExpenseDate(expenseData);

    setUserInput((prevState) => {
      return { ...prevState, enterdTitle: "" };
    });
    setUserInput((prevState) => {
      return { ...prevState, enterdAmount: "" };
    });
    setUserInput((prevState) => {
      return { ...prevState, enterdData: "" };
    });
  };

  const[isFormActiv, setIsFormActiv] = useState(true);

  function forumActivitiHendler(){
    if(isFormActiv){
        setIsFormActiv(false);
    }else{
        setIsFormActiv(true);
    }
  }

  let content = (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterdTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={userInput.enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enterdData}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={forumActivitiHendler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </div>
  );

  if(isFormActiv){
    content = (<div>
        <button onClick={forumActivitiHendler}>Add NewExpens</button>
    </div>)
  }
  return <form onSubmit={submitHandler}>
    {content}
  </form>;
};

export default ExpenseForm;
