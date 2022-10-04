import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;
    return (
    <div>
        {expenses.map((el, i) => <ExpenseItem
            title={el.title}
            amount={el.amount}
            date={el.date}
            key={i}></ExpenseItem>)}
     </div>

  );
}

export default Expenses;
