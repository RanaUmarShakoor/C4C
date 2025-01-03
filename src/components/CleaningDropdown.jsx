import React, { useRef, useState } from "react";

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
import { produce } from "immer";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";

const options = [
  { number: 0, icon: house_icon2, title: "What do you need to clean?" },
  { number: 1, icon: flat_icon, title: "Flat" },
  { number: 2, icon: house_icon, title: "House" },
  { number: 3, icon: garage_icon, title: "Garage" },
  { number: 4, icon: company_icon, title: "Company" },
  { number: 5, icon: factory_icon, title: "Factory" },
  { number: 6, icon: hall_icon, title: "Hall" },
  { number: 7, icon: windows_icon, title: "Windows" },
];

function makeopt(name, icon) {
  return {
    name,
    icon,
  };
}

export function CleaningDropdown({ type, onDropChange }) {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);
  const [selectedList, setSelectedList] = useState([]);
  const menuRef = useRef();
  const buttonRef = useRef();

  function dropdownHandler() {
    setIsDropdownHidden(!isDropdownHidden);
    onDropChange();
  }

  let option =
    selectedList.length > 0 ? selectedList[selectedList.length - 1] : null;
  let optionIcon = option ? option.icon : house_icon2;

  function isSelected(name) {
    return Boolean(selectedList.find((opt) => opt.name === name));
  }

  function onOptionSelected(name, icon) {
    let currentOpt = makeopt(name, icon);

    setSelectedList(
      produce((old) => {
        let entryIndex = old.findIndex((opt) => opt.name === name);
        if (entryIndex !== -1) {
          old.splice(entryIndex, 1);
        } else {
          old.push(currentOpt);
        }
      })
    );

    // setIsDropdownHidden(true);
    onDropChange();
  }

  useOnClickOutside([menuRef, buttonRef], () => {
    if (!isDropdownHidden) {
      setIsDropdownHidden(true);
    }
  });

  let theme = "orange-500";
  if (type == 2) {
    theme = "blue-500";
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <button
        ref={buttonRef}
        onClick={dropdownHandler}
        className={clsx(
          "border-2 rounded-[8px] bg-white text-black",
          type == 1 ? "focus:shadow-customOrange" : "focus:shadow-customBlue"
        )}
      >
        <div className="flex-1 gap-2 px-2 flex items-center !h-0 invisible overflow-hidden">
          <img src={optionIcon} alt="" className="w-6 rounded" />
          <p className="block text-[13px] xs:text-base font-normal">
            What do you need to clean?
          </p>
          <img src={arrow_down_icon} alt="" className="h-5 w-5 ml-auto" />
        </div>
        <div className="flex-1 gap-2 px-2 py-2 flex items-center">
          <img src={optionIcon} alt="" className="w-6  rounded" />
          <p className="block text-[13px] xs:text-base font-normal">
            {option ? option.name : "What do you need to clean?"}
          </p>
          <img src={arrow_down_icon} alt="" className="h-5 w-5 ml-auto" />
        </div>

        {/* <div className="flex items-center gap-2">
          <img src={optionIcon} alt="" className="w-6  rounded" />
          <p className="block text-[13px] xs:text-base font-normal">
            {option ? option.name : "What do you need to clean?"}
          </p>
        </div>
        <img src={arrow_down_icon} alt="" className="h-5 w-5" /> */}
      </button>
      <div
        ref={menuRef}
        className={clsx(
          `overflow-hidden absolute left-0 right-0 top-full rounded-[8px] mt-2 transition-height bg-white flex flex-col z-50`,
          isDropdownHidden ? "max-h-0 " : `max-h-96 sm:max-h-[230px] overflow-y-auto border border-${theme}`,
        )}
      >
        <DropdownOption
          icon={flat_icon}
          name={"Flat"}
          isSelected={isSelected("Flat")}
          type={type}
          onOptionChange={onOptionSelected}
        />
        <DropdownOption
          icon={house_icon}
          name={"House"}
          isSelected={isSelected("House")}
          type={type}
          onOptionChange={onOptionSelected}
        />
        <DropdownOption
          icon={garage_icon}
          name={"Garage"}
          isSelected={isSelected("Garage")}
          type={type}
          onOptionChange={onOptionSelected}
        />
        <DropdownOption
          icon={company_icon}
          name={"Company"}
          isSelected={isSelected("Company")}
          type={type}
          onOptionChange={onOptionSelected}
        />
        <DropdownOption
          icon={factory_icon}
          name={"Factory"}
          isSelected={isSelected("Factory")}
          type={type}
          onOptionChange={onOptionSelected}
        />
        <DropdownOption
          icon={hall_icon}
          name={"Hall"}
          isSelected={isSelected("Hall")}
          type={type}
          onOptionChange={onOptionSelected}
        />
        <DropdownOption
          icon={windows_icon}
          name={"Windows"}
          isSelected={isSelected("Windows")}
          type={type}
          onOptionChange={onOptionSelected}
        />
      </div>
    </div>
  );
}

function DropdownOption({
  icon,
  name,
  isSelected = false,
  type,
  onOptionChange,
}) {
  function clickHandker() {
    onOptionChange(name, icon);
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
      className={`flex items-center gap-2 px-2 py-[10px] text-black hover:bg-${theme}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <img src={icon} alt="" className="w-6  rounded" />
          <p className="block text-base font-normal">{name}</p>
        </div>
        {isSelected ? <img src={tick} alt="" className="w-5  mr-4" /> : ""}
      </div>
    </button>
  );
}

export function CleaningDropdown2({
  type,
  defaultOption = 0,
  onDropChange,
  className,
}) {
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);
  const [selectedList, setSelectedList] = useState(() => [
    makeopt(options[defaultOption].title, options[defaultOption].icon),
  ]);
  const menuRef = useRef();
  const buttonRef = useRef();

  function dropdownHandler() {
    setIsDropdownHidden(!isDropdownHidden);
    onDropChange();
  }

  let option =
    selectedList.length > 0 ? selectedList[selectedList.length - 1] : null;
  let optionIcon = option ? option.icon : house_icon2;

  function isSelected(name) {
    return Boolean(selectedList.find((opt) => opt.name === name));
  }

  function onOptionSelected(name, icon) {
    let currentOpt = makeopt(name, icon);

    setSelectedList(
      produce((old) => {
        let entryIndex = old.findIndex((opt) => opt.name === name);
        if (entryIndex !== -1) {
          old.splice(entryIndex, 1);
        } else {
          old.push(currentOpt);
        }
      })
    );

    // setIsDropdownHidden(true);
    // onDropChange();
  }

  useOnClickOutside([menuRef, buttonRef], () => {
    if (!isDropdownHidden) {
      setIsDropdownHidden(true);
      onDropChange();
    }
  });

  let classes = className;
  let theme = "orange-500";
  if (type == 2) {
    theme = "blue-500";
  }

  return (
    <div
      className={
        `${
          isDropdownHidden ? "min-w-[70px]" : "min-w-[250px]"
        } md:w-[310px] flex flex-col gap-2 transition-width relative ` + classes
      }
    >
      <button
        ref={buttonRef}
        onClick={dropdownHandler}
        className={`flex justify-between items-center gap-2 px-2 py-[7px] md:py-2 border-[1px] rounded-[8px] border-${theme} bg-white text-black ${
          type == 1 ? "focus:shadow-customOrange" : "focus:shadow-customBlue"
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={optionIcon} alt="" className="w-6  rounded" />
          <p
            className={`${
              isDropdownHidden ? "hidden" : "block"
            } md:block text-[13px] xs:text-base font-normal`}
          >
            {option ? option.name : "What do you need to clean?"}
          </p>
        </div>
        <img
          src={arrow_down_icon}
          alt=""
          className={`h-5 w-5 ${
            isDropdownHidden ? "" : "rotate-180 transition-transform"
          }`}
        />
      </button>
      <div
        ref={menuRef}
        className={`absolute top-12 w-full overflow-hidden transition-height flex flex-col bg-white border-${theme} z-50 ${
          !isDropdownHidden
            ? "max-h-96 sm:max-h-[230px] overflow-y-auto py-1 border-[1px] rounded-[8px]"
            : "max-h-0 rounded-[8px]"
        }`}
      >
        {options.map((opt, index) =>
          index != 0 ? (
            <DropdownOption
              icon={opt.icon}
              name={opt.title}
              isSelected={isSelected(opt.title)}
              type={type}
              onOptionChange={onOptionSelected}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
