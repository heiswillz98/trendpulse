import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Products from "@/components/Product/Product";

import { useEffect, useState } from "react";
import { productData } from "./api/api";

const index = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    const products = async () => {
      try {
        const data = await productData();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    products();
  }, []);

  console.log("products", products);

  return (
    <div className=" font-bodyFont ">
      <Header />
      <Banner />
      <Products products={products} />
      <Footer />
    </div>
  );
};

export default index;
