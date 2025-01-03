import { Link } from "react-router-dom";
import search_grey_icon from "./../assets/search_grey_icon.png";

export function ResultObjectSearch({ className, name, distance, type }) {
  let classes = className;
  let theme = "orange-500";
  if (type == 2) {
    theme = "blue-500";
  }

  return (
    <div
      style={{ fontFamily: "Prompt" }}
      className={
        classes +
        `  flex justify-between px-4 py-2 border-[1.5px] border-${theme} rounded-lg bg-white text-black ${
          type == 1 ? "focus:shadow-customOrange" : "focus:shadow-customBlue"
        }  `
      }
    >
      <div className="flex items-center gap-1">
        <img src={search_grey_icon} alt="" className="w-5 h-5 object-contain" />
        <input
          placeholder={name}
          className={
            "w-[100px] xs:w-auto font-normal text-sm md:text-base truncate outline-none"
          }
        />
      </div>
      <h6 className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
        <input defaultValue={distance} size={1} className="outline-none" />
        <span className="text-[grey]">km</span>
      </h6>
    </div>
  );
}
