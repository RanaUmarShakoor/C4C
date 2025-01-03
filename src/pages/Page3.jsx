import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundOrange } from "../components/Background";
import { CleaningDropdown } from "../components/CleaningDropdown";
import star_user from "./../assets/star_user.png";
import arrow_left_icon from "./../assets/arrow_left_icon.png";
import { Link } from "react-router-dom";

export function Page3() {
  const [isOpen, setIsOpen] = useState(false);

  function buttonController() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={1} />
      <Container className="flex-1 flex flex-col items-center justify-center gap-10 relative z-0">
        <BackgroundOrange />
        <section className="xxs:w-[90%] xs:w-[400px] md:w-auto flex items-center relative -mt-[60px]">
          <Block
            photo={star_user}
            heading="I offer cleaning"
            name="Bratislava - Ružinov"
            distance="15"
            type={1}
            onAction={buttonController}
          />
        </section>
        <Link
          to="/two"
          style={{ fontFamily: "Prompt" }}
          className={`absolute bottom-4 flex items-center gap-1 px-4 py-2 border-[1px] border-orange-500 rounded-lg bg-white`}
        >
          <img src={arrow_left_icon} alt="" className="h-5 object-contain" />
          <p>Back</p>
        </Link>
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
        <img
          src={photo}
          alt=""
          className="h-6 w-6 md:h-12 md:w-12 object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h3 className="font-semibold text-2xl lg:text-4xl">{heading}</h3>
        <div className="flex flex-col gap-3 mt-auto">
          <button
            style={{ fontFamily: "Prompt" }}
            className={
              "max-w-[330px] flex justify-between px-4 py-2 border-[1.5px] border-orange-500 rounded-lg bg-white text-black shadow-customOrange"
            }
          >
            <h4 className={"font-normal text-sm md:text-base"}>{name}</h4>
            <div className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
              <input
                defaultValue={distance}
                size={1}
                className="outline-none"
              />
              <span className="text-[grey]">km</span>
            </div>
          </button>
          <CleaningDropdown type={1} onDropChange={onAction} />
          <div className="flex justify-center">
            <Link
              to="/six"
              className={
                "w-fit  font-medium px-4 py-[5px] lg:py-[10px] rounded-md bg-orange-500 text-white text-center " +
                textColor
              }
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
