import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url("https://i.pinimg.com/750x/15/00/08/15000818df5127441e6d5c7bfafa20be.jpg")`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> Diplomatic . Police . Kenya</p>
                <p className="text-2xl font-light text-white ">
                  Service to all
                </p>
                <button
                  type="button"
                  className="text-white  bg-blue-600 hover:bg-blue-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/750x/e8/58/6e/e8586e53f7f7d241986bb88ed4d358f3.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> Diplomatic . Police . Kenya</p>
                <p className="text-2xl font-light text-white ">
                  Service to all
                </p>
                <button
                  type="button"
                  className="text-white  bg-blue-600 hover:bg-blue-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/750x/05/c1/f4/05c1f4f2943b64f702599bfbbc87cdcf.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white ">Diplomatic . Police . Kenya</p>
                <p className="text-2xl font-light text-white ">
                  service to all
                </p>
                <button
                  type="button"
                  className="text-white  bg-blue-600 hover:bg-blue-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
