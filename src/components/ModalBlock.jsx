import React, { useState } from "react";
import {
  CleaningDropdown,
  CleaningDropdown2,
} from "../components/CleaningDropdown";

import star_user from "./../assets/star_user.png";
import cleaning_icon from "./../assets/cleaning_icon.png";
import search_grey_icon from "./../assets/search_grey_icon.png";

export function ModalBlock2({ heading, name, distance, type = 1, onAction }) {
  let photo = star_user;
  let theme = "orange-500";
  if (type == 2) {
    photo = cleaning_icon;
    theme = "blue-500";
  }

  return (
    <div className="flex-1 hidden lg:flex items-start gap-6 px-4 py-2 rounded-[8px] text-white text-center bg-[#00000080] ">
      <div className={`p-5 rounded-full bg-${theme}`}>
        <img src={photo} alt="" className="h-12 w-12 object-contain" />
      </div>
      <div className="flex-1 flex flex-col items-start gap-2">
        <h3 className="font-semibold text-2xl lg:text-4xl">{heading}</h3>
        <div className="w-full flex justify-between items-start gap-6 mt-auto">
          <div className="w-[320px]">
            <div
              style={{ fontFamily: "Prompt" }}
              className={`w-full  hidden md:flex justify-between px-4 py-2 border-[1.5px] border-${theme} rounded-lg bg-white text-black ${
                type == 1
                  ? "focus:shadow-customOrange"
                  : "focus:shadow-customBlue"
              } `}
            >
              <div className="flex items-center gap-1 flex-1">
                <img
                  src={search_grey_icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                {/* <h4 className={"font-normal text-sm md:text-base"}>{name}</h4> */}
                <input
                  className={
                    "font-normal text-sm md:text-base flex-1 outline-none"
                  }
                  defaultValue={name}
                  size={1}
                />
              </div>
              <h6 className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
                <input
                  defaultValue={distance}
                  size={1}
                  className="outline-none"
                />
                <span className="text-[grey]">km</span>
              </h6>
            </div>
          </div>
          <div className="w-[320px]">
            <CleaningDropdown type={type} onDropChange={onAction} />
          </div>
          <div className="hidden w-fit lg:flex justify-center">
            <button
              className={` font-medium px-4 py-[10px] rounded-md bg-${theme} text-white text-center text-${theme} `}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
