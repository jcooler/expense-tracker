import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //function ClickHandler

  const [title, setTitle] = useState(props.title);

  const clickHandler = function () {

  setTitle("Updated!");
  console.log(title);
  };
  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} day={props.day} year={props.year} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
