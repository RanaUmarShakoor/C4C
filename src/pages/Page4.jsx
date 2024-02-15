import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundBlue } from "../components/Background";
import { CleaningDropdown } from "../components/CleaningDropdown";

import cleaning_icon from "./../assets/cleaning_icon.png";
import arrow_left_icon from "./../assets/arrow_left_icon.png";


export function Page4() {
  const [isOpen, setIsOpen] = useState(false);

  function buttonController() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={1} />
      <Container className="flex-1 flex items-center justify-center relative z-0">
        <BackgroundBlue />
        <section className="xxs:w-[90%] xs:w-[400px] md:w-auto flex items-center relative">
          <Block
            photo={cleaning_icon}
            heading="I am looking cleaning"
            name="Olivia Rhye"
            distance="15"
            type={2}
            onAction={buttonController}
          />
        </section>
        <button
          style={{ fontFamily: "Prompt" }}
          className={`absolute bottom-4 ${
            isOpen ? "hidden" : "flex"
          } items-center gap-1 px-4 py-2 border-[1px] border-blue-500 rounded-lg bg-white`}
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
            "w-[330px] hidden md:flex justify-between px-4 py-2 border-[1.5px] border-blue-500 rounded-lg bg-white text-black shadow-customBlue"
          }
        >
          <h4 className={"font-normal text-sm md:text-base"}>{name}</h4>
          <h6 className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
            {distance} <span className="text-[grey]">km</span>
          </h6>
        </button>
        <CleaningDropdown type={2} onDropChange={onAction} />
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
