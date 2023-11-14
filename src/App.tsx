import { useState } from "react";
import ExpensesList from "./components/ExpenseTracker/componenents/ExpensesList";
import Expenses from "./components/ExpenseTracker/componenents/ExpensesList";
import Form from "./components/Form";
import ExpenseFilter from "./components/ExpenseTracker/componenents/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/componenents/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbbb", amount: 11, category: "Bank" },
    { id: 3, description: "cccc", amount: 12, category: "Phone" },
    { id: 4, description: "dddd", amount: 13, category: "Electricity" },
  ]);

  const [selectedCategory, setselectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const onSelectCategory = (category: string) => {
    setselectedCategory(category);
  };
  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => onSelectCategory(category)}
        />
      </div>
      <ExpensesList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
