import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundOrange } from "../components/Background";
import { ModalBlock2 } from "../components/ModalBlock";
import { CleaningDropdown2 } from "../components/CleaningDropdown";

import location_icon from "./../assets/location_icon.png";
import search_icon from "./../assets/search_icon.png";
import search_grey_icon from "./../assets/search_grey_icon.png";
import cross_orange_icon from "./../assets/cross_orange_icon.png";
import cross_blue_icon from "./../assets/cross_blue_icon.png";
import offer_front_pic1 from "./../assets/offer_front_pic1.png";
import offer_front_pic_small from "./../assets/offer_front_pic_small.png";
import { OrangeOfferTile } from "../components/OrangeOfferTile";
import { ResultObjectSearch } from "../components/ResultObjectSearch";
import { Link } from "react-router-dom";

const objectsData = [
  {
    front_pic: offer_front_pic1,
    front_pic_small: offer_front_pic_small,
    price: 25,
    heading: "I need to clean up",
    description:
      "Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8.",
    location: "Trnava, Hlinkova 28",
  },
  {
    front_pic: offer_front_pic1,
    front_pic_small: offer_front_pic_small,
    price: 25,
    heading: "I need to clean up",
    description:
      "Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8. Hello, I need to clean a 50 m2 apartment and wash the windows. The number of windows in the apartment is 8.",
    location: "Trnava, Hlinkova 28",
  },
];

export function Orange1() {
  const [isOpen, setIsOpen] = useState(false);

  function buttonController() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={1} />
      <Container className="flex-1 overflow-x-hidden relative z-0 !py-0 !px-0 ">
        <BackgroundOrange />
        <section className="w-auto flex flex-col items-center gap-10 mt-5 relative">
          <ModalBlock2
            heading="I offer cleaning"
            name="Bratislava - Ružinov"
            distance="15"
            type={1}
            onAction={buttonController}
          />
          <ResultObjectsOrange />
        </section>
      </Container>
    </main>
  );
}

function ResultObjectsOrange() {
  const [isHidden, setIsHidden] = useState(false);

  function fieldsHandler() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="w-full flex-1 flex flex-col gap-6 p-2 lg:p-6 rounded-t-2xl bg-[#FFFFFF80]">
      <div className="flex items-center justify-center lg:justify-end gap-2">
        <Link
          to="/three"
          className={`w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-orange-500 text-orange-500 bg-white`}
        >
          <img
            src={cross_orange_icon}
            alt=""
            className="w-5 lg:w-8 h-5 lg:h-8 object-contain"
          />
        </Link>
        {!isHidden && (
          <ResultObjectSearch
            name="Bratislava - Ružinov"
            distance="15"
            className="lg:hidden"
            type={1}
          />
        )}
        <CleaningDropdown2
          type={1}
          defaultOption={0}
          onDropChange={fieldsHandler}
          className={"lg:hidden"}
        />
        <button
          className={
            "lg:hidden w-fit  flex items-center justify-center px-3 py-2 rounded-md bg-orange-500 text-white text-center "
          }
        >
          <img src={search_icon} alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {objectsData.map((dt) => (
          <OrangeOfferTile data={dt} variant={1} />
        ))}
      </div>
    </div>
  );
}

