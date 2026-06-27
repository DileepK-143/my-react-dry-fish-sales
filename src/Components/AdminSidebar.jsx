import "./AdminSidebar.css";

function AdminSidebar({ activeMenu, setActiveMenu }) {
  const menus = [
    "Dashboard",
    "Products",
    "Orders",
    "Customers",
    "Settings",
  ];

  return (
    <div className="admin-sidebar">

      <h2 className="admin-logo">
        🐟 Dry Seafood
      </h2>

      {menus.map((menu) => (
        <button
          key={menu}
          className={
            activeMenu === menu
              ? "menu active"
              : "menu"
          }
          onClick={() =>
            setActiveMenu(menu)
          }
        >
          {menu === "Dashboard" && "📊"}
          {menu === "Products" && "📦"}
          {menu === "Orders" && "🛒"}
          {menu === "Customers" && "👥"}
          {menu === "Settings" && "⚙"}

          {" "}
          {menu}
        </button>
      ))}

      <button className="logout-btn">
        🚪 Logout
      </button>

    </div>
  );
}

export default AdminSidebar;