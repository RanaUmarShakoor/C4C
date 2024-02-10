import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Container } from "./Container";
import logo from "./../assets/logo.png";
import user_icon from "./../assets/user_icon.png";
import arrow_down_icon from "./../assets/arrow_down_icon.png";
import flag_1 from "./../assets/flag_1.png";
import flag_2 from "./../assets/flag_2.png";
import flag_3 from "./../assets/flag_3.png";
import flag_4 from "./../assets/flag_4.png";
import tick_icon from "./../assets/tick_icon.png";

import burger_icon from "./../assets/burger_icon.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <Container className="bg-white">
        <div className="flex-1 flex justify-between">
          <div className="lg:hidden">
            <Menu
              width={280}
              noOverlay
              customBurgerIcon={<img src={burger_icon} />}
            >
              <a href="" className="font-semibold text-base">
                Home
              </a>
              <a href="" className="font-semibold text-base">
                How it works?
              </a>
            </Menu>
          </div>
          <img src={logo} alt="" className="w-10 md:w-14 lg:w-20 h-fit" />
          <div className="hidden lg:flex items-center gap-8">
            <a href="" className="font-semibold text-base">
              How it works?
            </a>
            <a href="" className="font-semibold text-base">
              Home
            </a>
          </div>
        </div>
        <div className="w-[48%] lg:w-[60%] flex justify-end items-center gap-4 lg:gap-8">
          <button className="hidden lg:block px-2 py-2 border-2 rounded-[8px] bg-[#F0F2F5] border-blue-500 text-blue-500">
            <p className="text-base font-normal">Login</p>
          </button>
          <button className=" px-2 py-2 lg:border-2 rounded-[8px] bg-blue-500 border-blue-500 text-white">
            <div className="flex items-center justify-center gap-2 w-7 lg:w-auto">
              <img src={user_icon} alt="" className="w-[14px] h-fit" />
              <p className="hidden lg:block text-base font-normal">
                Registration
              </p>
            </div>
          </button>
          <LanguageDropdown />
        </div>
      </Container>
    </>
  );
}

function LanguageDropdown() {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);
  const [flag, setFlag] = useState(flag_1);
  const [language, setLanguage] = useState("SVK");

  function dropdownHandler() {
    setIsDropdownHidden(!isDropdownHidden);
  }

  function languageHandler(langName, langFlag){
    setLanguage(langName)
    setFlag(langFlag)
    setIsDropdownHidden(true);
  }

  return (
    <div className="w-[110px] flex flex-col relative">
      <button
        onClick={dropdownHandler}
        className="flex justify-around items-center gap-2 lg:px-2 lg:py-2 lg:border-2 rounded-[8px] bg-white border-blue-500 text-black"
      >
        <div className="flex items-center gap-2">
          <img src={flag} alt="" className="w-9 lg:w-7 h-fit rounded" />
          <p className="hidden lg:block text-base font-normal">{language}</p>
        </div>
        <img src={arrow_down_icon} alt="" className="h-5 w-5" />
      </button>
      {isDropdownHidden ? (
        ""
      ) : (
        <div className="w-[130px] max-h-[200px] overflow-auto flex flex-col gap-2 py-1 absolute top-[50px] right-0 border-[1px] rounded-[8px] bg-white border-blue-500 z-10">
          <LanguageOption flag={flag_1} name={"SVK"} isSelected={language==="SVK"} onLanguageChange={languageHandler} />
          <LanguageOption flag={flag_2} name={"SLO"} isSelected={language==="SLO"} onLanguageChange={languageHandler}/>
          <LanguageOption flag={flag_3} name={"AUS"} isSelected={language==="AUS"} onLanguageChange={languageHandler}/>
          <LanguageOption flag={flag_4} name={"ITA"} isSelected={language==="ITA"} onLanguageChange={languageHandler}/>
        </div>
      )}
    </div>
  );
}

function LanguageOption({ flag, name, isSelected = false, onLanguageChange }) {

  function clickHandker(){
    onLanguageChange(name, flag)

  }

  return (
    <button onClick={clickHandker} className="flex  items-center gap-2 lg:px-2 lg:py-2 text-black hover:bg-[#F4F9FF]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={flag} alt="" className="w-9 lg:w-7 h-fit rounded" />
          <p className="hidden lg:block text-base font-normal">{name}</p>
        </div>
        {isSelected ? (
          <img src={tick_icon} alt="" className="w-5 h-fit mr-4" />
        ) : (
          ""
        )}
      </div>
    </button>
  );
}
