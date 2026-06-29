import { useEffect, useState } from "react";
import "./ProductsManagement.css";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../api/productApi";
function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

const [newProduct, setNewProduct] = useState({
  name: "",
  category: "",
  price: "",
  image: "",
  stock: "",
  description: "",
});
const [editing, setEditing] = useState(false);
const [editingId, setEditingId] = useState(null);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products", error);
    }
  };
const handleAddProduct = async () => {
  try {

    if (editing) {

      await updateProduct(editingId, newProduct);

    } else {

      await addProduct(newProduct);

    }

    setShowForm(false);

    setEditing(false);

    setEditingId(null);

    setNewProduct({
      name: "",
      category: "",
      price: "",
      image: "",
      stock: "",
      description: "",
    });

    loadProducts();

  } catch (error) {

    console.error(error);

  }
};
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) return;

  try {
    await deleteProduct(id);

    loadProducts();
  } catch (error) {
    console.error(error);
  }
};
const handleEdit = (product) => {

  setEditing(true);

  setEditingId(product._id);

  setNewProduct({
    name: product.name,
    category: product.category,
    price: product.price,
    image: product.image,
    stock: product.stock,
    description: product.description,
  });

  setShowForm(true);

};

  return (
    <div className="product-management">

      <div className="product-header">

        <h2>📦 Products</h2>

       <button
  className="add-btn"
  onClick={() => setShowForm(true)}
>
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

            <tr key={product._id}>

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

              <button
  className="edit-btn"
  onClick={() => handleEdit(product)}
>
  ✏ Edit
</button>

                <button
  className="delete-btn"
  onClick={() => handleDelete(product._id)}
>
  🗑 Delete
</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
{showForm && (
  <div className="popup">

  <div className="popup-header">
<h2>
  {editing ? "Edit Product" : "Add Product"}
</h2>
    <button
      className="close-btn"
      onClick={() => setShowForm(false)}
    >
      ×
    </button>
  </div>

  <div className="form-grid">

    <input
      type="text"
      placeholder="Product Name"
      value={newProduct.name}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          name: e.target.value,
        })
      }
    />

    <input
      type="text"
      placeholder="Category"
      value={newProduct.category}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          category: e.target.value,
        })
      }
    />

    <input
      type="number"
      placeholder="Price"
      value={newProduct.price}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          price: e.target.value,
        })
      }
    />

    <input
      type="number"
      placeholder="Stock"
      value={newProduct.stock}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          stock: e.target.value,
        })
      }
    />

    <input
      className="full-width"
      type="text"
      placeholder="Image URL"
      value={newProduct.image}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          image: e.target.value,
        })
      }
    />

    <div className="full-width image-preview">
      {newProduct.image ? (
        <img
          src={newProduct.image}
          alt="preview"
        />
      ) : (
        <span className="preview-text">
          Image Preview
        </span>
      )}
    </div>

    <textarea
      className="full-width"
      placeholder="Description"
      value={newProduct.description}
      onChange={(e) =>
        setNewProduct({
          ...newProduct,
          description: e.target.value,
        })
      }
    />

  </div>

  <div className="popup-buttons">

    <button
      className="cancel-btn"
      onClick={() => setShowForm(false)}
    >
      Cancel
    </button>

    <button
      className="save-btn"
      onClick={handleAddProduct}
    >
{editing ? "Update Product" : "Save Product"}    </button>

  </div>

</div>
  

)}
    </div>
  );
}

export default ProductsManagement;