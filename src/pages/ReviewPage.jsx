import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Container } from "../components/Container";
import { Rating } from "../components/Rating";
import { Link } from "react-router-dom";

export function ReviewPage() {

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} />
      <Container className="flex-1 flex items-center justify-center relative z-0">
        <section
          style={{ fontFamily: "Prompt" }}
          className="w-full flex flex-col items-center justify-center gap-8 lg:gap-10 px-4 xs:px-10 md:px-20 lg:px-24 xl:px-28 py-14 rounded-2xl shadow-customBlack"
        >
          <div className="flex flex-col items-center gap-10">
            <h1
              style={{ fontFamily: "Montserrat" }}
              className=" text-5xl font-semibold"
            >
              Add Review
            </h1>
            <h6 className=" text-[#626262]">
              Add a rating and your experience with this user.
            </h6>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">Enter your rating</h4>
            <Rating size={44} />
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <h4 className="text-xl font-medium">Write your comment</h4>
            <textarea
              name=""
              id=""
              rows="6"
              className="w-full border-[1px] border-[#0094FF] rounded-lg p-4"
            ></textarea>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row justify-center gap-x-8 gap-y-3">
            <Link to="/nine" className="text-center px-10 py-2 border-[1px] rounded-lg border-blue-500 text-blue-500">
              Close
            </Link>
            <Link to="#" className="text-center px-10 py-2 rounded-lg text-white bg-blue-500">
              Send
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
