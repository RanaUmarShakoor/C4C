import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundBlue } from "../components/Background";
import { ModalBlock2 } from "../components/ModalBlock";
import { BlueOfferTile } from "../components/BlueOfferTile";
import { CleaningDropdown2 } from "../components/CleaningDropdown";
import { ResultObjectSearch } from "../components/ResultObjectSearch";

import arrow_left_icon from "./../assets/arrow_left_icon.png";
import blue_right_arrow_icon from "./../assets/blue_right_arrow_icon.png";

import search_icon from "./../assets/search_icon.png";
import cross_orange_icon from "./../assets/cross_orange_icon.png";
import cross_blue_icon from "./../assets/cross_blue_icon.png";
import offer_front_pic1 from "./../assets/offer_front_pic1.png";
import offer_front_pic2 from "./../assets/offer_front_pic2.png";
import offer_front_pic_small from "./../assets/offer_front_pic_small.png";
import { Link } from "react-router-dom";

const objectsData = [
  {
    front_pic: offer_front_pic2,
    front_pic_small: offer_front_pic_small,
    price: 25,
    heading: "I need to clean up",
    description:
      // "My name is Jozef. I have many years of experience in cleaning both privately and in restaurants. I also have experience from England, where I cleaned privately, worked as a housekeeper-dog sitter...",
      "Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8.",
    location: "Trnava, Hlinkova 28",
    rating: 4,
  },
  {
    front_pic: offer_front_pic1,
    front_pic_small: offer_front_pic_small,
    price: 25,
    heading: "I need to clean up",
    description:
      "Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8.",
    location: "Trnava, Hlinkova 28",
    rating: 4,
  },
];

export function Blue1() {
  const [isOpen, setIsOpen] = useState(false);

  function buttonController() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} />
      <Container className="flex-1 overflow-x-hidden relative z-0 !py-0 !px-0 ">
        <BackgroundBlue />
        <section className="w-auto flex flex-col items-center gap-10 mt-5 relative">
          <ModalBlock2
            heading="I offer cleaning"
            name="Bratislava - Ružinov"
            distance="15"
            type={2}
            onAction={buttonController}
          />
          <ResultObjectsBlue type={2} />
        </section>
      </Container>
    </main>
  );
}

function ResultObjectsBlue({ type }) {
  const [isHidden, setIsHidden] = useState(false);

  function fieldsHandler() {
    setIsHidden(!isHidden);
  }

  let theme = "orange-500"
  if(type==2)
  {
    theme = "blue-500"
  }

  return (
    <div className="flex-1 flex flex-col gap-6 p-2 lg:p-6 rounded-t-2xl bg-[#FFFFFF80]">
      <div className="flex items-center justify-center lg:justify-end gap-2">
        <Link
          to="/four"
          className={`w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-${theme} bg-white`}
        >
          <img
            src={type == 1 ? cross_orange_icon : cross_blue_icon}
            alt=""
            className="w-5 lg:w-8 h-5 lg:h-8 object-contain"
          />
        </Link>
        {isHidden ? (
          ""
        ) : (
          <ResultObjectSearch
            name="Bratislava - Ružinov"
            distance="15"
            className="lg:hidden"
            type={type}
          />
        )}
        <CleaningDropdown2
          type={type}
          defaultOption={0}
          onDropChange={fieldsHandler}
          className={"lg:hidden"}
        />
        <button
          className={
            "lg:hidden w-fit  flex items-center justify-center px-3 py-2 rounded-md bg-blue-500 text-white text-center "
          }
        >
          <img src={search_icon} alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {objectsData.map((dt) => (
          <BlueOfferTile data={dt} />
        ))}
      </div>
    </div>
  );
}

