import { useState, useEffect } from "react";

// Components
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import ChartComp from "./components/Chart";

// Data
import { transactionsData } from "./data/mockData";

function App() {
  // 🔹 State for transactions (with localStorage)
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  // 🔹 State for role (viewer/admin)
  const [role, setRole] = useState("viewer");

  // 🔹 Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar role={role} setRole={setRole} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 text-white min-h-screen p-6">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">
          Finance Dashboard
        </h1>

        {/* Dashboard Cards */}
        <Dashboard transactions={transactions} />

        {/* Charts + Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ChartComp transactions={transactions} />
          <Insights transactions={transactions} />
        </div>

        {/* Transactions Section */}
        <div className="mt-6">
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
            role={role}
          />
        </div>

      </div>
    </div>
  );
}

export default App;