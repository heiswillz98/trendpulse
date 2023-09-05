import React from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [current, setCurrent] = React.useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? 3 : (slides) => slides - 1);
  };

  const nextSlide = () => {
    setCurrent(current === 3 ? 0 : (slides) => slides + 1);
  };

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen relative">
        <div
          style={{
            transform: `translateX(-${current * (100 / data.length)}%)`,
          }}
          className="h-full flex w-[400vw] transition-transform duration-1000"
        >
          {data.map((item, index) => (
            <img
              key={index}
              src={item}
              className="w-screen h-full object-cover"
              alt={`img${index}`}
            />
          ))}
        </div>
        <div className="absolute mx-auto left-0 right-0 w-fit flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-16 h-16 border-[1px] border-gray-700 flex items-center justify-center cursor-pointer active:text-white active:bg-gray-900 duration-300 "
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-16 h-16 border-[1px] border-gray-700 flex items-center justify-center cursor-pointer active:text-white active:bg-gray-900 duration-300 "
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
