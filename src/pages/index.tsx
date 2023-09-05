import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Products from "@/components/Product/Product";

import React from "react";

const index = () => {
  return (
    <div className=" font-bodyFont ">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default index;
