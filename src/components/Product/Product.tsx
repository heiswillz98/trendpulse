import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-center mt-10">
        <h1 className="text-2xl bg-black text-white w-80 text-center">
          Shopping Everyday
        </h1>

        <span></span>
        <p className="max-w-[600px] text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptate vero ullam pariatur voluptatum aspernatur eius amet unde
          sequi quam omnis incidunt, et laborum cum hic deserunt vel. Unde
          recusandae ex excepturi nulla.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
