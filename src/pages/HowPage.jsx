import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";

import search_icon from "./../assets/search_grey_icon.png";
import star_user from "./../assets/star_user.png";
import star_user_grey from "./../assets/star_user_grey.png";
import cleaning_icon from "./../assets/cleaning_icon.png";
import cleaning_grey_icon from "./../assets/cleaning_grey_icon.png";
import { Link } from "react-router-dom";

const dataCleaner = [
  {
    number: 1,
    heading: "Register as a cleaner",
    subheading: "Registration is quick and easy",
  },
  {
    number: 2,
    heading: "Complete your profile for maximum transparency",
    subheading: "By filling out the data, you will maximize your success",
  },
  {
    number: 3,
    heading: "See ads in your area",
    subheading:
      "Advertisements contain the necessary information about cleaning",
  },
  {
    number: 4,
    heading: "Find deals for you",
  },
];

const dataUser = [
  {
    number: 1,
    heading: "Register as a user",
    subheading: "Registration is quick and easy",
  },
  {
    number: 2,
    heading: "Choose your membership",
    subheading:
      "Membership unlocks your phone. numbers and the possibility of advertising",
  },

  {
    number: 3,
    heading: "Create an offer",
    subheading: "Create a simple ad and wait for a response.",
  },

  {
    number: 4,
    heading: "Choose the location and object of cleaning",
    subheading: "Enter the location and find a suitable cleaner.",
  },

  {
    number: 5,
    heading: "Find deals for you",
  },
];

export function HowPage() {
  const [section, setSection] = useState(1);

  let theme = "orange-500";
  if (section == 2) theme = "blue-500";

  function sectionHandler(s) {
    setSection(s);
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} />
      <Container className="flex-1 flex items-start justify-center relative z-0">
        <section className="flex flex-col items-center gap-6 lg:gap-10 px-4 xs:px-10 md:px-36 lg:px-44 xl:px-52 py-6 rounded-2xl shadow-customBlack">
          <div className="flex flex-col gap-3 lg:gap-5 text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-black">
              How it works?
            </h1>
            <h6 className="text-[13px] text-[#626262]">
              Welcome to the C4C - Click4cleaner platform! <br />
              C4C connects cleaners with clients looking for cleaning services.
              The platform ensures search efficiency and transparency.
            </h6>
          </div>
          <div className="lg:w-[520px] flex flex-col justify-center gap-6 lg:gap-10">
            <div
              style={{ fontFamily: "Prompt" }}
              className="flex flex-col lg:justify-center lg:flex-row rounded-lg text-[#9A9A9A] bg-[#E4E4E4]"
            >
              <button
                onClick={() => {
                  sectionHandler(1);
                }}
                // py-2 xs:py-3 px-3 xs:px-5
                className={`flex items-center flex-1 px-2 py-3 justify-center gap-2 rounded-lg bg-${
                  section == 1 ? theme : ""
                }`}
              >
                <img
                  src={section == 1 ? star_user : star_user_grey}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <p className={`${section == 1 ? "text-white" : ""}`}>
                  I offer cleaning
                </p>
              </button>
              <button
                onClick={() => {
                  sectionHandler(2);
                }}
                // py-2 xs:py-3 px-3 xs:px-5
                className={`flex items-center flex-1 px-2 py-3 justify-center gap-2 rounded-lg bg-${
                  section == 2 ? theme : ""
                }`}
              >
                <img
                  src={section == 2 ? cleaning_icon : cleaning_grey_icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <p className={`${section == 2 ? "text-white" : ""}`}>
                  I am looking for cleaning
                </p>
              </button>
            </div>
            <div className="flex-1 flex flex-col">
              {(section == 1 ? dataCleaner : dataUser).map((dt, index) =>
                index != (section == 1 ? dataCleaner : dataUser).length - 1 ? (
                  <Point
                    key={dt.number}
                    number={dt.number}
                    heading={dt.heading}
                    subheading={dt.subheading}
                    type={section}
                  />
                ) : (
                  <PointSearch
                    key={dt.number}
                    number={dt.number}
                    heading={dt.heading}
                    type={section}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}

function Point({ number, heading, subheading, connect = true, type }) {
  let theme = "orange-500";
  if (type == 2) theme = "blue-500";

  return (
    <div className="flex gap-4">
      <div className="flex relative">
        <div
          className={`flex items-center justify-center h-9 w-9 rounded-full text-white bg-${theme} relative z-30`}
        >
          <p>{number}</p>
        </div>
        {connect ? (
          <div
            className={`flex h-full w-[2px] absolute left-[50%] bg-${theme}`}
          />
        ) : (
          ""
        )}
      </div>
      <div
        style={{ fontFamily: "Prompt" }}
        className="flex flex-col gap-1 pb-4 text-lg"
      >
        <h3 className="text-black">{heading}</h3>
        <p className="text-[#626262]">{subheading}</p>
      </div>
    </div>
  );
}

function PointSearch({ number, heading, type }) {
  let theme = "orange-500";
  if (type == 2) theme = "blue-500";
  return (
    <div className="flex gap-4">
      <div className="flex relative">
        <div
          className={`flex items-center justify-center h-9 w-9 border-[1px] rounded-full text-white border-${theme} relative z-30`}
        >
          <div
            className={`flex items-center justify-center h-7 w-7 rounded-full bg-${theme}`}
          >
            <p>{number}</p>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Prompt" }}
        className="w-full flex flex-col gap-1 pb-4 text-lg"
      >
        <h3 className="text-black">{heading}</h3>
        <div
          style={{ fontFamily: "Prompt" }}
          className={`sm:w-3/5 flex justify-between px-4 py-2 text-sm md:text-base border-[1.5px] border-${theme} rounded-lg bg-white text-black `}
        >
          <div className={"flex gap-1 flex-1 font-normal text-[#9A9A9A]"}>
            <img src={search_icon} alt="" className="w-5 h-5 object-contain" />
            {/* <p>Tranva</p> */}
            <input
              defaultValue={"Tranva"}
              size={1}
              className="bg-transparent flex-1 outline-none"
            />
          </div>
          <h6 className="ps-1 border-l-[1px] border-[#D9D9D9]">
            {" " + 5}
            <span className="text-[grey]"> km</span>
          </h6>
        </div>
        <Link
          to={type === 2 ? "/eight" : "/six"}
          style={{ fontFamily: "Montserrat" }}
          className={`w-fit px-4 py-2 font-semibold text-sm rounded-lg bg-${theme} text-white`}
        >
          Search
        </Link>
      </div>
    </div>
  );
}
