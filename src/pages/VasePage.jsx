import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundBlue, BackgroundOrange } from "../components/Background";
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

export function VasePage() {
  const [isOpen, setIsOpen] = useState(false);

  function buttonController() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} />
      <Container className="flex-1 overflow-x-hidden relative z-0 !py-0 !px-0 ">
        <BackgroundBlue />
        <section className="w-auto flex flex-col items-center gap-10 px-1 pt-32 relative">
          <ResultObjectsOrange type={1} />
        </section>
      </Container>
    </main>
  );
}

function ResultObjectsOrange({ type }) {
  const [isHidden, setIsHidden] = useState(false);

  function fieldsHandler() {
    setIsHidden(!isHidden);
  }

  let theme = "orange-500";
  if (type == 2) {
    theme = "blue-500";
  }

  return (
    <div className="w-full flex-1 flex flex-col gap-6 p-2 lg:p-6 rounded-t-2xl bg-[#FFFFFF80]">
      <div className="flex items-center justify-between px-1 lg:px-0">
        <div className="flex items-center gap-2">
          <h3
            style={{ fontFamily: "Montserrat" }}
            className="text-lg xs:text-xl md:text-2xl font-semibold"
          >
            Vaše pridané inzeráty
          </h3>
        </div>
        <button
          className={`w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-${theme} bg-white`}
        >
          <img
            src={type == 1 ? cross_orange_icon : cross_blue_icon}
            alt=""
            className="w-8 h-8 object-contain"
          />
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {objectsData.map((dt) => (
          <OrangeOfferTile data={dt} variant={2} />
        ))}
      </div>
    </div>
  );
}
