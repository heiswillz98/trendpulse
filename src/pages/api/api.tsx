import axios from "axios";

export const productData = () => {
  try {
    const products = axios.get(
      "https://fakestoreapiserver.reactbd.com/products"
    );
    return products.then((res) => res.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
