import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundOrange } from "../components/Background";
import star_user from "./../assets/star_user.png";

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

export function Page3() {
  const [isOpen, setIsOpen] = useState(false);

  function buttonController() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={1} />
      <Container className="flex-1 flex items-center justify-center relative z-0">
        <BackgroundOrange />
        <section className="xxs:w-[90%] xs:w-[400px] md:w-auto flex items-center relative">
          <Block
            photo={star_user}
            heading="I offer cleaning"
            name="Olivia Rhye"
            distance="15"
            type={1}
            onAction={buttonController}
          />
        </section>
        <button
          style={{ fontFamily: "Prompt" }}
          className={`absolute bottom-4 ${
            isOpen ? "hidden" : "flex"
          } items-center gap-1 px-4 py-2 border-[1px] border-orange-500 rounded-lg bg-white`}
        >
          <img src={arrow_left_icon} alt="" className="h-5 object-contain" />
          <p>Back</p>
        </button>
      </Container>
    </main>
  );
}

function Block({ photo, heading, name, distance, type = 1, onAction }) {
  let background = " bg-orange-500";
  let textColor = "text-orange-500";
  if (type == 2) {
    background = " bg-blue-500";
    textColor = "text-blue-500";
  }

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-6 lg:py-5 px-2 md:px-20 rounded-[8px] text-white text-center bg-[#00000080] ">
      <div className={"p-5 rounded-full" + background}>
        <img src={photo} alt="" className="h-12 w-12 object-contain" />
      </div>
      <h3 className="font-semibold text-2xl lg:text-4xl">{heading}</h3>
      <div className="flex flex-col gap-6 mt-auto">
        <button
          style={{ fontFamily: "Prompt" }}
          className={
            "w-[330px] hidden md:flex justify-between px-4 py-2 border-[1.5px] border-orange-500 rounded-lg bg-white text-black shadow-customOrange"
          }
        >
          <h4 className={"font-normal text-sm md:text-base"}>{name}</h4>
          <h6 className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
            {distance} <span className="text-[grey]">km</span>
          </h6>
        </button>
        <Dropdown type={1} onDropChange={onAction} />
        <div className="hidden lg:flex justify-center">
          <button
            className={
              "w-fit font-medium px-1 py-[0.5px] border-[1px] rounded-md bg-[#F0F2F5] text-center " +
              textColor
            }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ type, onDropChange }) {
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
        className="flex justify-between items-center gap-2 px-2 py-2 border-2 rounded-[8px] bg-white text-black focus:shadow-customOrange"
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
