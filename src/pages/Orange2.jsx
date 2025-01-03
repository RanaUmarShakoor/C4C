import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { ImageCarousel } from "../components/ImageCarousel";

import cross_orange_icon from "./../assets/cross_orange_icon.png";
import offer_front_pic1 from "./../assets/offer_front_pic1.png";
import offer_front_pic2 from "./../assets/offer_front_pic2.png";
import location_icon from "./../assets/location_icon.png";
import { Link } from "react-router-dom";

const offerData = [
  {
    front_pic: offer_front_pic1,
    price: 25,
    heading: "I need to clean up",
    description:
      "Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8.",
    location: "Trnava, Hlinkova 28",
  },
];

export function Orange2() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={1} login={true} />
      <Container className="flex-1 flex justify-center gap-10 relative z-0">
        <section
          style={{ fontFamily: "Prompt" }}
          className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl shadow-customBlack relative"
        >
          <Link
          to="/six"
            className={`w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-orange-500 bg-white absolute right-4`}
          >
            <img
              src={cross_orange_icon}
              alt=""
              className="w-5 lg:w-8 h-5 lg:h-8 object-contain"
            />
          </Link>
          <div className="sm:w-[34%] xl:w-[26%] xxl:w-[28%] mt-9 sm:mt-0 flex flex-col gap-6">
            <img
              src={offer_front_pic2}
              alt=""
              className="w-full  object-contain rounded-lg"
            />
            <button className=" px-4 py-2 rounded-lg text-white bg-orange-500">
              0944 677 555
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-3 xl:gap-4 text-[#626262]">
            <div className="flex flex-col gap-2 xl:mb-3">
              <h4 className="font-medium text-xl sm:text-lg lg:text-xl">
                $ {offerData[0].price} /hod
              </h4>
              <div className="flex md:hidden gap-2">
                <img
                  src={location_icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <h6 className="text-[13px]">{offerData[0].location}</h6>
              </div>
            </div>
            <h2
              style={{ fontFamily: "Montserrat" }}
              className="font-semibold text-xl md:text-2xl text-black"
            >
              {offerData[0].heading}
            </h2>
            <p className="text-[13px] md:text-sm lg:text-[15px] xl:text-base">
              {offerData[0].description}
            </p>
            <div className="hidden md:flex gap-2">
              <img
                src={location_icon}
                alt=""
                className="w-6 h-6 object-contain"
              />
              <h6 className="text-sm lg:text-base">{offerData[0].location}</h6>
            </div>

            <div className="flex flex-col gap-4">
              <h2
                style={{ fontFamily: "Montserrat" }}
                className="text-2xl font-semibold text-black"
              >
                Photos of the object
              </h2>
              <div className="">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

