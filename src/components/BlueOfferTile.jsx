import React, { useState } from "react";
import { Rating } from "../components/Rating";
import { FavouriteButton } from "../components/FavouriteButton";

import blue_right_arrow_icon from "./../assets/blue_right_arrow_icon.png";
import { Link } from "react-router-dom";
import clsx from "clsx";

export function BlueOfferTile({ data, isFavourite = false, variant = 1 }) {
  // const [full, setFull] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-white shadow-customBlack ">
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
          <h4 className="font-medium text-base md:text-lg">
            $ {data.price} /hod
          </h4>

          <FavouriteButton filled={isFavourite} />
        </div>
        <h2
          style={{ fontFamily: "Montserrat" }}
          className="font-semibold text-xl text-black"
        >
          {data.heading}
        </h2>
        <p
          className={clsx(
            "text-[13px] md:text-sm lg:text-base overflow-hidden",
            // !full && "max-h-[60px]"
          )}
        >
          {data.description}
        </p>

        <div
          className={`mt-auto flex  ${
            variant == 1 ? "" : "flex-col md:flex-row items-center md:"
          } items-end justify-between gap-6 text-[13px] text-sm lg:text-base`}
        >
          <div
            className={`mt-auto ${
              variant == 1
                ? "hidden md:flex"
                : "w-full flex flex-col md:flex-row"
            } gap-3 lg:gap-6`}
          >
            <Link
              to="/nine"
              className={`w-full md:w-fit px-4 py-2 rounded-md bg-blue-500 text-white text-center`}
            >
              View Profile
            </Link>
            <Link
              to="/nine?modalNumber=1"
              className={`w-full md:w-fit px-4 py-2 border-[1px] rounded-md border-blue-500 text-blue-500 text-center`}
            >
              View number
            </Link>
          </div>
          <div
            className={`${
              variant == 1 ? "hidden md:flex" : "flex items-center"
            } md:flex-col gap-2 md:gap-1`}
          >
            <h5 className="font-medium text-black text-center">Rating</h5>
            <Rating size={24} rating={data.rating} />
          </div>
          <button
            className={`${
              variant == 1 ? "flex md:hidden" : "hidden"
            } items-center gap-1`}
          >
            <Link to="/nine" className="text-sm text-[#0094FF]">Show more</Link>
            <img
              src={blue_right_arrow_icon}
              alt=""
              className="w-5 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
