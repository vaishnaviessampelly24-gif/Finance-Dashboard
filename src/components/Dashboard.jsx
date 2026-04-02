function Dashboard({ transactions }) {
  // 🔹 Calculate income
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  // 🔹 Calculate expense
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  // 🔹 Calculate balance
  const balance = income - expense;

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Balance Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="text-gray-300">Total Balance</h3>
          <p className="text-2xl font-bold text-white mt-2">
            ₹{balance}
          </p>
        </div>

        {/* Income Card */}
        <div className="bg-green-500 p-6 rounded-xl shadow">
          <h3 className="text-white">Income</h3>
          <p className="text-2xl font-bold mt-2">
            ₹{income}
          </p>
        </div>

        {/* Expense Card */}
        <div className="bg-red-500 p-6 rounded-xl shadow">
          <h3 className="text-white">Expense</h3>
          <p className="text-2xl font-bold mt-2">
            ₹{expense}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;