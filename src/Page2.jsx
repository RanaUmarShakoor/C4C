import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import star_user from "./assets/star_user.png";
import cleaning_icon from "./assets/cleaning_icon.png";
import user from "./assets/user_icon.png";

export function Page2() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />
      <Container className="flex-1 flex items-center justify-center !px-2 md:px-5  relative z-0">
        <Background />
        <section className="flex gap-8 md:gap-20 lg:gap-40 py-40 md:py-48 lg:py-56">
          <Block
            photo={star_user}
            heading="I offer cleaning"
            name="Olivia Rhye"
            distance="15"
            type={1}
          />
          <Block
            photo={cleaning_icon}
            heading="I am looking for cleaning"
            name="Olivia Rhye"
            distance="15"
            type={2}
          />
        </section>
      </Container>
      <Footer />
    </main>
  );
}

function Block({ photo, heading, name, distance, type = 1 }) {
  let background = " bg-orange-500";
  let textColor = "text-orange-500";
  if (type == 2) {
    background = " bg-blue-500";
    textColor = "text-blue-500";
  }

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-6 lg:py-5 px-2 md::px-4 rounded-[8px] text-white text-center bg-[#00000080] ">
      <div className={"p-5 rounded-full" + background}>
        <img src={photo} alt="" className="h-12 w-12 object-contain" />
      </div>
      <h3 className="font-semibold text-base md:text-2xl lg:text-4xl">
        {heading}
      </h3>
      <div className="flex flex-col gap-6 mt-auto">
        <button
          className={
            "lg:w-[330px] flex justify-between px-4 py-2 border-[1.5px] border-orange-500 rounded-lg bg-white text-black shadow-[#FFA50080] shadow-inner"
          }
        >
          <h4 className={"font-normal text-sm md:text-base "}>{name}</h4>

          <h6 className="hidden md:block ps-1 border-l-[1px] border-[#D9D9D9]">
            {distance} <span className="text-[grey]">km</span>
          </h6>
        </button>
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
