import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./Admin.css";
import DashboardCards from "../components/DashboardCards";
import RecentOrders from "../components/RecentOrders";
import ProductsManagement from "../components/ProductsManagement";
import OrdersManagement from "../components/OrdersManagement";
import RevenueChart from "../components/RevenueChart";


function Admin({
  orders,
  setOrders,
  cart,
  setCart,
}) {

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  return (

    <div className="admin-page">

      <AdminSidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className="admin-content">

        <h1>{activeMenu}</h1>

{activeMenu === "Dashboard" && (
  <>
    <DashboardCards orders={orders} />

    <RevenueChart orders={orders} />

    <RecentOrders orders={orders} />
  </>
)}

{activeMenu === "Products" && (
  <ProductsManagement />
)}
{activeMenu === "Orders" && (
<OrdersManagement
  orders={orders}
  setOrders={setOrders}
/>)}

      </div>

    </div>

  );
}

export default Admin;