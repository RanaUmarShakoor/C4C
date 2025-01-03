import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";

import cross_blue_icon from "./../assets/cross_blue_icon.png";
import offer_front_pic1 from "./../assets/offer_front_pic1.png";
import offer_front_pic2 from "./../assets/offer_front_pic2.png";
// import location_icon from "./../assets/location_icon.png";
import user_pfp0 from "./../assets/user_pfp0.png";
import user_group_icon from "./../assets/user_group_icon.png";
import { FavouriteButton } from "../components/FavouriteButton";
import { Rating } from "../components/Rating";
import { SubscriptionModal } from "./SubscriptionModal";
import { Link } from "react-router-dom";
import clsx from "clsx";

const offerData = [
  {
    front_pic: offer_front_pic1,
    price: 30.99,
    heading: "Jozef Mrkvička",
    description:
      "My name is Jozef. I have many years of experience in cleaning both privately and in restaurants. I also have experience from England, where I cleaned privately, worked as a housekeeper-dog sitter...",
    // location: "Trnava, Hlinkova 28",
  },
];

const reviews = [
  {
    pfp: user_pfp0,
    username: "Jozko Mrkvicka",
    comment:
      "Volám sa Ela. Mám dlhoročné skúsenosti s upratovaním v súkromí aj v reštauráciách. Mám skúsenosti aj z Anglicka, kde som upratovala v sukromi, robila som hausekeeperku-dogsiterk...",
    rating: 4,
  },
];

export function Blue2() {
  let [numberShown, setNumberShown] = useState(true);

  function clickHandler() {
    setNumberShown(false);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} login={true} />
      <Container className="flex-1 flex justify-center gap-10 relative z-0 overflow-hidden">
        <section
          style={{ fontFamily: "Prompt" }}
          className="flex flex-col gap-6 p-4 rounded-2xl shadow-customBlack relative overflow-hidden"
        >
          <div className="flex gap-4 lg:gap-10 items-center justify-end absolute top-4 right-4">
            <FavouriteButton filled={true} />
            <Link
              to="/eight"
              className={`w-7 md:w-10 h-7 md:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-blue-500 bg-white`}
            >
              <img
                src={cross_blue_icon}
                alt=""
                className="w-5 md:w-8 h-5 md:h-8 object-contain"
              />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[34%] xl:w-[26%] xxl:w-[28%] mt-9 sm:mt-0 flex flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <img
                  src={offer_front_pic2}
                  alt=""
                  className="w-full object-contain rounded-lg"
                />
                <h4 className="md:hidden font-medium text-xl sm:text-lg text-[#626262] text-center">
                  $ {offerData[0].price} /hod
                </h4>
              </div>

              <div className="flex-1 flex md:hidden flex-col justify-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <h5 className="text-xl font-medium">Rating</h5>
                  <Rating size={32} rating={4} gap={1} />
                </div>
                <button
                  onClick={clickHandler}
                  className=" px-4 py-2 rounded-lg text-white bg-blue-500"
                >
                  {numberShown ? "Show Number" : "0944 677 555"}
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-3 xl:gap-4 text-[#626262]">
              <div className="flex flex-col gap-2 xl:mb-3">
                <h4 className="hidden md:block font-medium text-xl sm:text-lg lg:text-xl">
                  $ {offerData[0].price} /hod
                </h4>
              </div>
              <h2
                style={{ fontFamily: "Montserrat" }}
                className="font-semibold text-xl md:text-2xl text-black"
              >
                {offerData[0].heading}
              </h2>
              <p className="text-[13px] md:text-sm lg:text-[15px] xl:text-base">
                {offerData[0].description}
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="sm:w-[34%] xl:w-[26%] xxl:w-[28%] mt-9 sm:mt-0 hidden md:flex flex-col gap-6">
              <button
                onClick={clickHandler}
                className=" px-4 py-2 rounded-lg text-white bg-blue-500"
              >
                {numberShown ? "Show Number" : "0944 677 555"}
              </button>
              <div className="flex flex-col items-center gap-2">
                <h5 className="text-xl font-medium">Rating</h5>
                <Rating size={40} rating={4} gap={3} />
              </div>
              <div className="flex items-center justify-center gap-2 text-[#0094FF]">
                <img
                  src={user_group_icon}
                  alt=""
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />
                <p className="text-sm lg:text-base">
                  A group of several cleaners
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 md:-mt-6 overflow-y-hidden">
              <div className="flex justify-between">
                <h4 className=" text-xl font-medium">Reviews</h4>
                {/* <SubscriptionModal> */}
                  <Link
                    to="/ten"
                    className={clsx(
                      "px-4 py-2 rounded-lg text-sm text-white bg-blue-500"
                    )}
                  >
                    Add Review
                  </Link>
                {/* </SubscriptionModal> */}
              </div>
              <div className="flex flex-col gap-2 max-h-96 overflow-auto">
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
                <Review data={reviews[0]} />
              </div>
            </div>
          </div>
        </section>
      </Container>
      <SubscriptionModal />
    </main>
  );
}

function Review({ data }) {
  return (
    <div
      style={{ fontFamily: "Prompt" }}
      className="flex gap-8 p-2 border-[1px] border-[#E4E4E4] rounded-2xl "
    >
      <img src={data.pfp} alt="" className="w-24 object-contain" />
      <div className="flex flex-col gap-2">
        <h5 className="">{data.username}</h5>
        <p className="text-sm text-[#9A9A9A]">{data.comment}</p>
        <Rating size={24} rating={data.rating} />
      </div>
    </div>
  );
}
