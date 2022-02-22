import React, {useState} from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import Card from "../UL/Card";
import './Expenses.css'

const Expenses = (props) => {  
  const [filteredYear,setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          ></ExpenseItem>

      </Card>
  </div>
  );
}

export default Expenses;