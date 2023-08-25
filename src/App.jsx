import { List } from "components/List/List";
import s from "./style.module.css";
import { ExpenseInput } from "components/containers/ExpenseInput/ExpenseInput";
import { useSelector } from "react-redux";
import { IncomeInput } from "components/containers/IncomeInput/IncomeInput";
import { ExpenseTotal } from "components/containers/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";
export function App() {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  console.log(expenseList);
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title="Ispent" subtitle="Track your expenses" />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={expenseList} />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
