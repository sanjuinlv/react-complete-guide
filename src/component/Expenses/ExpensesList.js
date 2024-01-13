import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpenseList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list-fallback">Found No Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
