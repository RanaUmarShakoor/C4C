import React from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { BackgroundBlue } from "../components/Background";
import { BlueOfferTile } from "../components/BlueOfferTile";

import cross_orange_icon from "./../assets/cross_orange_icon.png";
import cross_blue_icon from "./../assets/cross_blue_icon.png";
import offer_front_pic1 from "./../assets/offer_front_pic1.png";
import offer_front_pic2 from "./../assets/offer_front_pic2.png";
import offer_front_pic_small from "./../assets/offer_front_pic_small.png";

const objectsData = [
  {
    front_pic: offer_front_pic2,
    front_pic_small: offer_front_pic_small,
    price: 25,
    heading: "I need to clean up",
    description:
      "My name is Jozef. I have many years of experience in cleaning both privately and in restaurants. I also have experience from England, where I cleaned privately, worked as a housekeeper-dog sitter...",
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

export function FavouritesPage() {

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} />
      <Container className="flex-1 overflow-x-hidden relative z-0 !py-0 !px-0 ">
        <BackgroundBlue />
        <section className="w-auto flex flex-col items-center gap-10 px-1 pt-32 relative">
          <ResultObjectsBlue type={2} />
        </section>
      </Container>
    </main>
  );
}

function ResultObjectsBlue({ type }) {

  let theme = "orange-500";
  if (type == 2) {
    theme = "blue-500";
  }

  return (
    <div className="flex-1 flex flex-col gap-6 p-2 lg:p-6 rounded-t-2xl bg-[#FFFFFF80]">
      <div className="flex items-center justify-between px-1 lg:px-0">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="#0094FF"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#0094FF"
            className="w-8 h-8 lg:w-10 lg:h-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#0094FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <h3
            style={{ fontFamily: "Montserrat" }}
            className="text-lg xs:text-xl md:text-2xl font-semibold"
          >
            Your favorite services
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
          <BlueOfferTile data={dt} isFavourite={true} variant={2} />
        ))}
      </div>
    </div>
  );
}

