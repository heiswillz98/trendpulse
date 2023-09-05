// import Footer from '@/components/shared/footer/Footer';
// import Navbar from '@/components/shared/navbar/Navbar';
import { FC, PropsWithChildren } from "react";
import MainProps from "./main.props";

const Main: FC<PropsWithChildren<MainProps>> = ({ children, meta }) => {
  return (
    <>
      {meta}
      {/* <Navbar /> */}
      <main className="max-w-[2000px] mx-auto bg-[#F6F6F6]">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
