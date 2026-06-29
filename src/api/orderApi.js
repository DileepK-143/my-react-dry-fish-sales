import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

export const getOrders = () => axios.get(API_URL);

export const addOrder = (order) => axios.post(API_URL, order);

export const updateOrder = (id, order) =>
  axios.put(`${API_URL}/${id}`, order);

export const deleteOrder = (id) =>
  axios.delete(`${API_URL}/${id}`);