import axios from "axios";

const API = axios.create({
baseURL: "https://my-react-dry-fish-sales.onrender.com/api",});

export const getProducts = () => API.get("/products");
export const addProduct = (data) => API.post("/products", data);
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);
