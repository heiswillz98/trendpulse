import React from "react";
import styles from "./Header.module.scss";
import Cart from "@/assets/icons/cart2";
import Logo from "@/assets/icons/logo";

const Header = () => {
  return (
    <div className="h-20 border-b-[2px] w-full border-b-gray-800 font-titleFont ">
      <div className="flex items-center justify-between mx-auto h-full max-w-screen-xl">
        <div className="text-[24px] underline">TrendPulse</div>
        <div className="flex items-center gap-8 ">
          <ul className="flex items-center gap-8">
            <li className={styles.item}>Home</li>
            <li className={styles.item}>Pages</li>
            <li className={styles.item}>Shop</li>
            <li className={styles.item}>Element</li>
            <li className={styles.item}>Blog</li>
          </ul>
          <div className="">
            <div className="relative">
              <Cart />
            </div>
            <div className="h-7 w-8 rounded-[20rem] text-center justify-center items-center border-[5px] border-b-gray-950">
              0
            </div>
          </div>
          <div className=" border rounded-full h-10 w-9 border-black justify-center items-center">
            <span>
              <Logo />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
