import "./RevenueChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RevenueChart({ orders }) {
  const monthlyRevenue = Array(12).fill(0);

  orders.forEach((order) => {
    const orderDate = new Date(order.date);

if (!isNaN(orderDate)) {
  const month = orderDate.getMonth();
  monthlyRevenue[month] += order.total;
}
  });

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    datasets: [
      {
        label: "Revenue (₹)",
        data: monthlyRevenue,
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="revenue-chart">
      <h2>📈 Monthly Revenue</h2>

      <Bar data={data} />
    </div>
  );
}

export default RevenueChart;