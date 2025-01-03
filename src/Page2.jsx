import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import star_user from "./assets/star_user.png";
import cleaning_icon from "./assets/cleaning_icon.png";
import user from "./assets/user_icon.png";
import search_icon from "./assets/search_grey_icon.png";
import { Link } from "react-router-dom";
import clsx from "clsx";

export function Page2() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />
      <Container className="flex-1 flex items-center justify-center !px-2 md:px-5 relative z-0">
        <Background />
        <section className="flex gap-8 md:gap-20 lg:gap-40 pb-40 md:pb-48 pt-32 lg:pb-56">
          <Block
            photo={star_user}
            heading="I offer cleaning"
            name="Trnava"
            distance="15"
            link="/three"
            type={1}
          />
          <Block
            photo={cleaning_icon}
            heading="I am looking for cleaning"
            name="Bratislava - Ružinov"
            distance="15"
            link="/four"
            type={2}
          />
        </section>
      </Container>
      <Footer />
    </main>
  );
}

function Block({ link, photo, heading, name, distance, type = 1 }) {
  let background = " bg-orange-500";
  let textColor = "text-orange-500";
  let border = "border-orange-500";
  let shadow = "#FFA50080";

  if (type == 2) {
    background = " bg-blue-500";
    textColor = "text-blue-500";
    border = "border-blue-500";
    shadow = "#3B82F6";
  }

  let searchProps = { shadow, border, name, distance };

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-6 lg:py-5 px-2 md:px-4 rounded-[8px] text-white text-center bg-[#00000080] ">
      <div className={"p-5 rounded-full" + background}>
        <img
          src={photo}
          alt=""
          className="h-6 w-6 md:h-12 md:w-12 object-contain"
        />
      </div>
      <h3 className="font-semibold text-base md:text-2xl lg:text-4xl">
        {heading}
      </h3>
      <div className="flex flex-col gap-6 mt-auto max-lg:self-stretch">
        <SearchInput desktop={true} {...searchProps} />
        <SearchInput desktop={false} link={link} {...searchProps} />
        <div className="hidden lg:flex justify-center">
          <Link to={link}>
            <button
              className={
                "font-medium px-4 py-2 text-white rounded-md text-center " +
                background +
                " " +
                textColor
              }
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SearchInput({ link, desktop, shadow, border, name, distance }) {
  const inner = (
    <div
      style={{
        boxShadow: `0px 0px 0px 4px ${shadow}`,
      }}
      className={clsx(
        "lg:w-[330px] gap-1 items-center justify-between px-4 py-2 border-[1.5px]",
        border,
        "rounded-lg bg-white text-black",
        desktop ? "hidden lg:flex" : "flex lg:hidden"
      )}
    >
      <img src={search_icon} alt="" className="w-5 h-5 object-contain" />
      <input
        className="font-normal text-sm md:text-base self-stretch outline-none flex-1"
        size={1}
        placeholder={name}
      />

      <h6 className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
        <input defaultValue={distance} size={1} className="outline-none" />
        <span className="text-[grey]">km</span>
      </h6>
    </div>
  );

  if (desktop) return inner;

  return <Link to={link}>{inner}</Link>;
}
