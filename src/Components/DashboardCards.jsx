import "./DashboardCards.css";
import products from "../data/products";

function DashboardCards({ orders }) {
  const totalProducts = products.length;

  const totalOrders = orders.length;

  const totalCustomers = orders.length;

  const totalRevenue = orders.reduce(
    (total, order) => total + order.total,
    0
  );

  return (
    <div className="dashboard-cards">

      <div className="dashboard-card products">
        <h3>📦 Products</h3>
        <h1>{totalProducts}</h1>
      </div>

      <div className="dashboard-card orders">
        <h3>🛒 Orders</h3>
        <h1>{totalOrders}</h1>
      </div>

      <div className="dashboard-card customers">
        <h3>👥 Customers</h3>
        <h1>{totalCustomers}</h1>
      </div>

      <div className="dashboard-card revenue">
        <h3>💰 Revenue</h3>
        <h1>₹{totalRevenue}</h1>
      </div>

    </div>
  );
}

export default DashboardCards;