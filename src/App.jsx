import { GlobalProvider } from "./Context/GlobalState";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { TransactionForm } from "./Components/TransactionForm";
import { TransactionList } from "./Components/transactions/TransactionList";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { ExpenseChart } from "./Components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-neutral-950 text-white h-screen flex justify-center items-center">
        <div className="w-2/5 flex justify-center items-center">
          <div className="bg-neutral-800 p-10 rounded-md w-full">
            <Header />
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="flex-1 flex flex-col">
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
