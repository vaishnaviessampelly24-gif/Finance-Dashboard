import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartComp({ transactions }) {
  const data = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: "Transaction Amount",
        data: transactions.map(t => t.amount),
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow text-black">
      <h2 className="text-lg font-bold mb-2">Balance Trend</h2>
      <Line data={data} />
    </div>
  );
}

export default ChartComp;