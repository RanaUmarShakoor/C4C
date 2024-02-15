import React, { useState } from "react";

import arrow_up_icon from "./../assets/arrow_up_icon.png";
import arrow_down_icon from "./../assets/arrow_down_icon.png";
import arrow_left_icon from "./../assets/arrow_left_icon.png";
import house_icon from "./../assets/house_icon.png";
import house_icon2 from "./../assets/house_icon2.png";
import flat_icon from "./../assets/flat_icon.png";
import garage_icon from "./../assets/garage_icon.png";
import company_icon from "./../assets/company_icon.png";
import factory_icon from "./../assets/factory_icon.png";
import hall_icon from "./../assets/hall_icon.png";
import windows_icon from "./../assets/windows_icon.png";
import tick_blue_icon from "./../assets/tick_blue_icon.png";
import tick_orange_icon from "./../assets/tick_orange_icon.png";


export function CleaningDropdown({ type, onDropChange }) {
    const [isDropdownHidden, setIsDropdownHidden] = useState(true);
    const [optionIcon, setOptionIcon] = useState(house_icon2);
    const [option, setOption] = useState("null");
  
    function dropdownHandler() {
      setIsDropdownHidden(!isDropdownHidden);
      onDropChange();
    }
  
    function optionHandler(optionName, optionIconX) {
      setOption(optionName);
      setOptionIcon(optionIconX);
      setIsDropdownHidden(true);
      onDropChange();
    }
  
    
    let theme = "orange-500";
    if (type == 2) {
        theme = "blue-500";
    } 
    
  
    return (
      <div className="flex flex-col gap-2 relative">
        <button
          onClick={dropdownHandler}
          className={`flex justify-between items-center gap-2 px-2 py-2 border-2 rounded-[8px] bg-white text-black ${type==1 ? "focus:shadow-customOrange": "focus:shadow-customBlue"}`}
        >
          <div className="flex items-center gap-2">
            <img src={optionIcon} alt="" className="w-6 h-fit rounded" />
            <p className="block text-[13px] xs:text-base font-normal">
              {option === "null" ? "What do you need to clean?" : option}
            </p>
          </div>
          <img src={arrow_down_icon} alt="" className="h-5 w-5" />
        </button>
        <div
          className={`overflow-hidden transition-height flex flex-col bg-white border-${theme} z-50 ${
            !isDropdownHidden
              ? "max-h-96 py-1 border-[1px] rounded-[8px]"
              : "max-h-0 rounded-[8px]"
          }`}
        >
          <DropdownOption
            icon={flat_icon}
            name={"Flat"}
            isSelected={option === "Flat"}
            type={type}
            onOptionChange={optionHandler}
          />
          <DropdownOption
            icon={house_icon}
            name={"House"}
            isSelected={option === "House"}
            type={type}
            onOptionChange={optionHandler}
          />
          <DropdownOption
            icon={garage_icon}
            name={"Garage"}
            isSelected={option === "Garage"}
            type={type}
            onOptionChange={optionHandler}
          />
          <DropdownOption
            icon={company_icon}
            name={"Company"}
            isSelected={option === "Company"}
            type={type}
            onOptionChange={optionHandler}
          />
          <DropdownOption
            icon={factory_icon}
            name={"Factory"}
            isSelected={option === "Factory"}
            type={type}
            onOptionChange={optionHandler}
          />
          <DropdownOption
            icon={hall_icon}
            name={"Hall"}
            isSelected={option === "Hall"}
            type={type}
            onOptionChange={optionHandler}
          />
          <DropdownOption
            icon={windows_icon}
            name={"Windows"}
            isSelected={option === "Windows"}
            type={type}
            onOptionChange={optionHandler}
          />
        </div>
      </div>
    );
  }
  
  function DropdownOption({ icon, name, isSelected = false, type, onOptionChange }) {
    function clickHandker() {
      onOptionChange(name, icon);
    }
  
    let theme = "[#FFF7E9]";
    let tick = tick_orange_icon
    if (type == 2) {
        theme = "[#F4F9FF]";
        tick = tick_blue_icon
    } 
    
    return (
      <button
        onClick={clickHandker}
        className={`flex items-center gap-2 px-2 py-[10px] text-black hover:bg-${theme}`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img src={icon} alt="" className="w-6 h-fit rounded" />
            <p className="block text-base font-normal">{name}</p>
          </div>
          {isSelected ? (
            <img src={tick} alt="" className="w-5 h-fit mr-4" />
          ) : (
            ""
          )}
        </div>
      </button>
    );
  }
  