import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Container } from "./Container";
import logo from "./../assets/logo.png";
import user_icon from "./../assets/user_icon.png";
import user_orange_icon from "./../assets/user_orange_icon.png";
import user_blue_icon from "./../assets/user_blue_icon.png";
import arrow_down_icon from "./../assets/arrow_down_icon.png";
import flag_1 from "./../assets/flag_1.png";
import flag_2 from "./../assets/flag_2.png";
import flag_3 from "./../assets/flag_3.png";
import flag_4 from "./../assets/flag_4.png";
import flag_5 from "./../assets/flag_5.png";
import tick_blue_icon from "./../assets/tick_blue_icon.png";
import tick_orange_icon from "./../assets/tick_orange_icon.png";
import cross_orange_icon from "./../assets/cross_orange_icon.png";
import cross_blue_icon from "./../assets/cross_blue_icon.png";

import burger_icon from "./../assets/burger_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar({ type = 2, login = false }) {
  let theme = "blue-500";
  if (type == 1) {
    theme = "orange-500";
  }

  return (
    <>
      <Container className="bg-white">
        <div className="flex-1 flex justify-between items-center">
          <div className="lg:hidden">
            <Menu width={280} customBurgerIcon={<img src={burger_icon} />}>
              <div className="h-full !flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                  <Link to="/two">
                    <img src={logo} alt="" className="w-10 md:w-14 lg:w-20 " />
                  </Link>
                  <Link to="/five" className="font-semibold text-base">
                    How it works?
                  </Link>
                  <Link to="/two" className="font-semibold text-base">
                    Home
                  </Link>
                  {login == 1 && type == 2 ? (
                    <Link to="/eleven" className="font-semibold text-base">
                      Favorite
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                  <ButtonGroup
                    type={type}
                    theme={theme}
                    login={login}
                    noSmall
                  />

                  <LanguageDropdown type={type} noSmall={true} />
                  {/* <button
                    className={`w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-${theme} bg-white`}
                  >
                    <img
                      src={type == 1 ? cross_orange_icon : cross_blue_icon}
                      alt=""
                      className="w-5 lg:w-8 h-5 lg:h-8 object-contain"
                    />
                  </button> */}
                </div>
              </div>
            </Menu>
          </div>
          <Link to="/two">
            <img src={logo} alt="" className="w-16 md:w-14 lg:w-20 " />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/five" className="font-semibold text-base">
              How it works?
            </Link>
            <Link to="/two" className="font-semibold text-base">
              Home
            </Link>
            {login == 1 && type == 2 ? (
              <Link to="/eleven" className="font-semibold text-base">
                Favorite
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-[45%] lg:w-[50%] flex justify-end items-center gap-4 lg:gap-8">
          <ButtonGroup type={type} theme={theme} login={login} />
          {/* {login == 0 ? (
            <button
              className={`hidden lg:block px-2 py-2 border-2 rounded-[8px] border-${theme} text-${theme}`}
            >
              <p className="text-base font-normal">Login</p>
            </button>
          ) : (
            ""
          )}
          {login == 1 ? (
            <>
              {type == 2 ? (
                <button
                  className={`hidden lg:block px-2 py-2 border-2 rounded-[8px] bg-${theme} text-white`}
                >
                  <p className="text-base font-normal">Add an Offer</p>
                </button>
              ) : (
                ""
              )}
              <button
                className={`flex items-center justify-center gap-2 px-2 py-2 lg:border-2 rounded-[8px] border-${theme} bg-${theme} lg:bg-transparent lg:text-${theme}`}
              >
                <img
                  src={type == 1 ? user_orange_icon : user_blue_icon}
                  alt=""
                  className="hidden lg:block w-5 h-5 object-contain"
                />
                <div className="flex lg:hidden items-center justify-center gap-2 w-7">
                  <img src={user_icon} alt="" className="w-[14px] " />
                </div>

                <p className="hidden lg:block text-base font-normal">
                  My Profile
                </p>
              </button>
            </>
          ) : (
            <button
              className={`px-2 py-2 lg:border-2 rounded-[8px] bg-${theme} border-${theme} text-white`}
            >
              <div className="flex items-center justify-center gap-2 w-7 lg:w-auto">
                <img src={user_icon} alt="" className="w-[14px] " />
                <p className="hidden lg:block text-base font-normal">
                  Registration
                </p>
              </div>
            </button>
          )} */}

          <LanguageDropdown type={type} />
        </div>
      </Container>
    </>
  );
}

function ButtonGroup({ type, theme, login, noSmall = false }) {
  return (
    <>
      {login == 0 ? (
        <Link
          to="/?modalNumber=3"
          className={` ${
            noSmall ? "w-full block" : "hidden lg:block"
          }  px-2 py-2 border-2 rounded-[8px] border-${theme} text-${theme}`}
        >
          <p className="text-base font-normal text-center">Login</p>
        </Link>
      ) : (
        ""
      )}
      {login == 1 ? (
        <>
          {type == 2 && (
            <Link
              to="/fifteen"
              className={`${
                noSmall ? "w-full block" : "hidden lg:block"
              }  px-4 py-2 rounded-[8px] bg-${theme} text-white`}
            >
              <p className="text-base font-normal">Add an Offer</p>
            </Link>
          )}
          <Link
            to={type == 2 ? "/fourteen" : "/thirteen"}
            className={`flex items-center justify-center gap-2 px-2 py-2 rounded-[8px] ${
              noSmall
                ? `w-full border-2 bg-transparent`
                : `lg:border-2 bg-${theme} lg:bg-transparent lg:text-${theme}`
            } border-${theme}`}
          >
            <img
              src={type == 1 ? user_orange_icon : user_blue_icon}
              alt=""
              className={`${
                noSmall ? "block" : "hidden lg:block"
              }  w-5 h-5 object-contain`}
            />
            <div
              className={`${
                noSmall ? "hidden " : "flex lg:hidden"
              }  items-center justify-center gap-2 w-7`}
            >
              <img src={user_icon} alt="" className="w-[14px] " />
            </div>

            <span
              className={`${
                noSmall ? "block" : "hidden lg:block"
              }  text-base text-orange-500 font-normal`}
            >
              My Profile
            </span>
          </Link>
        </>
      ) : (
        <Link
          to="/?"
          className={` ${
            noSmall ? "w-full" : ""
          } px-2 py-2 lg:border-2 rounded-[8px] bg-${theme} border-${theme} text-white`}
        >
          <div
            className={`flex items-center justify-center gap-2 ${
              noSmall ? "w-full" : "w-7 lg:w-auto"
            } `}
          >
            <img src={user_icon} alt="" className="w-[14px] " />
            <p
              className={`${
                noSmall ? "block" : "hidden lg:block"
              } text-base font-normal`}
            >
              Registration
            </p>
          </div>
        </Link>
      )}
    </>
  );
}

function LanguageDropdown({ type = 2, noSmall = false }) {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);
  const [flag, setFlag] = useState(flag_1);
  const [language, setLanguage] = useState("SVK");

  function dropdownHandler() {
    setIsDropdownHidden(!isDropdownHidden);
  }

  function languageHandler(langName, langFlag) {
    setLanguage(langName);
    setFlag(langFlag);
    setIsDropdownHidden(true);
  }

  let theme = "blue-500";
  if (type == 1) {
    theme = "orange-500";
  }

  return (
    <div
      className={`${
        noSmall ? "w-full" : "lg:w-[110px]"
      } flex flex-col relative`}
    >
      <button
        onClick={dropdownHandler}
        className={`flex justify-around items-center gap-2 ${
          noSmall ? "px-2 py-2 border-2 " : "lg:px-2 lg:py-2 lg:border-2 "
        } rounded-[8px] bg-white border-${theme} text-black`}
      >
        <div className="flex items-center gap-2">
          <img src={flag} alt="" className="w-9 h-[26px] lg:w-7 lg: rounded" />
          <p
            className={`${
              noSmall ? "block" : "hidden lg:block"
            } text-base font-normal`}
          >
            {language}
          </p>
        </div>
        <img
          src={arrow_down_icon}
          alt=""
          className={`${noSmall ? "block" : "hidden lg:block"} ${
            isDropdownHidden ? "" : "rotate-180"
          } transition-transform h-5 w-5`}
        />
      </button>
      {isDropdownHidden ? (
        ""
      ) : (
        <div
          className={`${
            noSmall ? "w-full" : "w-[130px]"
          }  max-h-[200px] overflow-auto flex flex-col gap-2 py-1 absolute ${
            noSmall ? "bottom-[50px]" : "top-[50px]"
          }  right-0 border-[1px] rounded-[8px] bg-white border-${theme} z-10`}
        >
          <LanguageOption
            flag={flag_1}
            name={"SVK"}
            isSelected={language === "SVK"}
            type={type}
            onLanguageChange={languageHandler}
          />
          <LanguageOption
            flag={flag_5}
            name={"ENG"}
            isSelected={language === "ENG"}
            type={type}
            onLanguageChange={languageHandler}
          />
          <LanguageOption
            flag={flag_2}
            name={"SLO"}
            isSelected={language === "SLO"}
            type={type}
            onLanguageChange={languageHandler}
          />
          <LanguageOption
            flag={flag_3}
            name={"AUS"}
            isSelected={language === "AUS"}
            type={type}
            onLanguageChange={languageHandler}
          />
          <LanguageOption
            flag={flag_4}
            name={"ITA"}
            isSelected={language === "ITA"}
            type={type}
            onLanguageChange={languageHandler}
          />
        </div>
      )}
    </div>
  );
}

function LanguageOption({
  flag,
  name,
  isSelected = false,
  type = 1,
  onLanguageChange,
}) {
  function clickHandker() {
    onLanguageChange(name, flag);
  }

  let theme = "[#FFF7E9]";
  let tick = tick_orange_icon;
  if (type == 2) {
    theme = "[#F4F9FF]";
    tick = tick_blue_icon;
  }

  return (
    <button
      onClick={clickHandker}
      className="flex items-center gap-2 px-2 py-2 text-black hover:bg-[#F4F9FF]"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={flag} alt="" className="w-7  rounded" />
          <p className="block text-[13px] md:text-base font-normal">{name}</p>
        </div>
        {isSelected ? <img src={tick} alt="" className="w-4  mr-2" /> : ""}
      </div>
    </button>
  );
}
