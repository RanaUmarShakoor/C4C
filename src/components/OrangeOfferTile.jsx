import { Link } from "react-router-dom";
import location_icon from "./../assets/location_icon.png";
import { useState } from "react";

export function OrangeOfferTile({ data, variant = 1 }) {
  let [numberShown, setNumberShown] = useState(false);

  let rightButtonContent;
  if (variant == 1) {
    rightButtonContent = numberShown ? "0907123456" : "Show number";
  } else {
    rightButtonContent = "Delete ad";
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-white shadow-customBlack">
      <div className="w-full md:w-[35%] lg:w-[25%] xl:w-1/5">
        <img
          src={data.front_pic}
          alt=""
          className="hidden md:block rounded-lg object-cover"
        />
        <img
          src={data.front_pic_small}
          alt=""
          className="w-full md:hidden rounded-lg object-cover"
        />
      </div>
      <div
        style={{ fontFamily: "Prompt" }}
        className="flex-1 flex flex-col gap-3 lg:gap-4 text-[#626262]"
      >
        <div className="flex justify-between">
          <h4 className="font-medium text-base lg:text-xl">
            $ {data.price} /hod
          </h4>
          <div className="flex md:hidden gap-2">
            <img
              src={location_icon}
              alt=""
              className="w-5 h-5 object-contain"
            />
            <h6 className="text-[13px]">{data.location}</h6>
          </div>
        </div>
        <h2
          style={{ fontFamily: "Montserrat" }}
          className="font-semibold text-xl text-black"
        >
          {data.heading}
        </h2>
        <p className="text-[13px] md:text-sm lg:text-base">
          {data.description}
        </p>
        <div className="hidden md:flex gap-2">
          <img src={location_icon} alt="" className="w-6 h-6 object-contain" />
          <h6 className="text-sm lg:text-base">{data.location}</h6>
        </div>
        <div
          className={`mt-auto flex ${
            variant == 1 ? "justify-between" : "flex-col md:flex-row"
          }  md:justify-start gap-6 text-[13px] text-sm lg:text-base`}
        >
          <Link
            to={variant == 1 ? "/seven" : "/sixteen"}
            className={`${
              variant == 1 ? "w-fit" : ""
            } px-4 py-2 rounded-md bg-orange-500 text-white text-center`}
          >
            {variant == 1 ? " Show ad" : "Edit ad"}
          </Link>
          <button
            onClick={() => setNumberShown(true)}
            className={`${
              variant == 1 ? "w-fit" : ""
            } px-4 py-2 border-[1px] rounded-md ${
              variant == 1 ? "border-orange-500" : "border-[#FF1F00]"
            } ${
              variant == 1 ? "text-orange-500" : "text-[#FF1F00]"
            } text-center`}
          >
            {/* {variant == 1 ? " Show number" : "Delete ad"} */}
            {rightButtonContent}
          </button>
        </div>
      </div>
    </div>
  );
}
