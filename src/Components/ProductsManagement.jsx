import products from "../data/products";
import "./ProductsManagement.css";

function ProductsManagement() {
  return (
    <div className="product-management">

      <div className="product-header">

        <h2>📦 Products</h2>

        <button className="add-btn">
          + Add Product
        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.id}>

              <td>

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

              </td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>

                <button className="edit-btn">
                  ✏ Edit
                </button>

                <button className="delete-btn">
                  🗑 Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductsManagement;