import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import PaymentLogo from "@/assets/images/paymentLogo.png";
import Img from "../shared/images/images";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7 ">
          <div className="text-[24px] underline text-white ">TrendPulse</div>
          <p className="text-white text-sm">© willz- 2022</p>
          <Img path={PaymentLogo} name={""} className="w-[20rem] h-[5rem]" />
          <div className="flex gap-2">
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="ml-6">
          <h1 className="text-white text-2xl mb-4">Locate us</h1>
          <div className="text-base flex flex-col gap-4">
            <p>Lekki, Lagos, Nigeria</p>
            <p>Mobile - 07030040055</p>
            <p>Phone - 07030040055</p>
            <p>mail- Trendpulse@gmail.com</p>
          </div>
        </div>
        <div className="ml-6">
          <h1 className="text-white text-2xl mb-4">Profile</h1>
          <div className="text-base flex flex-col gap-4">
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-1 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="email"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white activetext-white">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
