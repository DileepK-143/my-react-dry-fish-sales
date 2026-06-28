import { useState } from "react";
import "./SettingsManagement.css";

function SettingsManagement() {
  const [settings, setSettings] = useState({
    storeName: "Kakinada Dry Seafood",
    email: "support@dryseafood.com",
    phone: "9876543210",
    address: "Kakinada, Andhra Pradesh",
    deliveryCharge: 50,
    freeDelivery: 1000,
    cod: true,
    upi: true,
    card: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveSettings = () => {
    localStorage.setItem(
      "shopSettings",
      JSON.stringify(settings)
    );

    alert("✅ Settings Saved Successfully!");
  };

  return (
    <div className="settings-page">

      <h2>⚙ Store Settings</h2>

      <div className="settings-form">

        <label>Store Name</label>
        <input
          name="storeName"
          value={settings.storeName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          value={settings.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          name="phone"
          value={settings.phone}
          onChange={handleChange}
        />

        <label>Address</label>
        <textarea
          name="address"
          value={settings.address}
          onChange={handleChange}
        />

        <label>Delivery Charge (₹)</label>
        <input
          type="number"
          name="deliveryCharge"
          value={settings.deliveryCharge}
          onChange={handleChange}
        />

        <label>Free Delivery Above (₹)</label>
        <input
          type="number"
          name="freeDelivery"
          value={settings.freeDelivery}
          onChange={handleChange}
        />

        <h3>Payment Methods</h3>

        <label>
          <input
            type="checkbox"
            name="cod"
            checked={settings.cod}
            onChange={handleChange}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="checkbox"
            name="upi"
            checked={settings.upi}
            onChange={handleChange}
          />
          UPI
        </label>

        <label>
          <input
            type="checkbox"
            name="card"
            checked={settings.card}
            onChange={handleChange}
          />
          Card Payment
        </label>

        <button
          className="save-btn"
          onClick={saveSettings}
        >
          💾 Save Settings
        </button>

      </div>

    </div>
  );
}

export default SettingsManagement;