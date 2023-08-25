import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpenses = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  const imputIncome = useSelector((store) => store.EXPENSE.income);

  const remainingMoney = imputIncome - totalExpenses;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
