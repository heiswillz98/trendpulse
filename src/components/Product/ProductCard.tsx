import type { FC } from "react";
import { ProductsProps } from "./Product.props";
import Img from "../shared/images/images";

const ProductCard: FC<ProductsProps> = ({ product }) => {
  return (
    <>
      {product && (
        <div className="h">
          <div className="w-full h-96 cursor-pointer oveflow-hidden">
            <Img
              path={product.image}
              name={""}
              className="w-full h-full object-cover hover:scale-110 duration-500 "
            />
          </div>
          <div className="w-full border-[1px] px-2 py-4">
            <div className="flex justify-between items-center">
              <div className=" font-bold whitespace-nowrap">
                <h2>{product.title}</h2>
              </div>
              <div className="flex gap-2">
                <p className="line-through text-gray-500 ">
                  ${product.oldPrice}
                </p>
                <p className="font-semibold">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
