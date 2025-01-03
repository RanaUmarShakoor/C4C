import clsx from "clsx";
import React, { useState } from "react";
import { Navbar } from "components/Navbar";
import { Container } from "components/Container";

import { Rating } from "components/Rating";
import { Input } from "./common";
import { Link } from "react-router-dom";

function PersonalInformation() {
  return (
    <div className="py-10 shrink-0 md:ml-24 flex-1 md:pr-6">
      <h1 className="text-xl font-medium">Personal Information</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-y-4 gap-x-6">
        <Input defaultValue="Jozko" label={"Name"} />
        <Input defaultValue="Mrkvička@gmail.com" label={"Email"} />
        <Input defaultValue="Mrkvička" label={"Surname"} />
        <Input defaultValue="0978 787 900" label={"Mobile Number"} />
      </div>
    </div>
  );
}

export function BlueSettings() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={2} login={true} />
      <Container className="flex-1 flex justify-center gap-10 relative z-0">
        <section
          style={{ fontFamily: "Prompt" }}
          className="p-4 flex flex-1 rounded-2xl shadow-customBlack max-md:flex-col"
        >
          <div className="shrink-0 flex flex-col items-center">
            {/*  */}

            <h2 className="text-3xl font-medium">Jožko Mrkvička</h2>
            <img src="/settings-clean.png" className="md:w-full mt-5" />

            <div className="flex items-center justify-between flex-wrap mt-4 md:hidden self-stretch px-4">
              <h1 className="font-medium text-xl mr-4">Vaš hodnotenie</h1>
              <Rating rating={4} size={36} />
            </div>

            <Link
              to="/twelve"
              className={clsx(
                "mt-4 py-3 px-5 text-center",
                "self-stretch rounded-lg transition-colors",
                "border border-orange-500 text-orange-500",
                "hover:bg-orange-600 hover:text-white"
              )}
            >
              My ads
            </Link>
            <Link
              to="/nine?modalNumber=2"
              className={clsx(
                "mt-4 py-3 px-5 text-center",
                "self-stretch rounded-lg transition-colors",
                "border border-blue-500 text-blue-500",
                "hover:bg-blue-600 hover:text-white"
              )}
            >
              My subscription
            </Link>

            <p className="text-[#60A600] mt-3">Annual subscription</p>
            <p className="text-[#626262] text-sm">Renewal 30.11.2023</p>

            <div className="flex-1" />

            <Link to="/?modalNumber=6" className="text-blue-500 underline max-md:hidden">
              Change Password
            </Link>

            <button className="mt-4 py-3 px-5 self-stretch blue-btn rounded-lg max-md:hidden">
              Log out
            </button>

            {/*  */}
          </div>

          <PersonalInformation />

          <Link to="/?modalNumber=6" className="text-blue-500 underline md:hidden self-center mt-4">
            Change Password
          </Link>

          <button className="mt-4 py-3 px-5 self-stretch blue-btn rounded-lg md:hidden">
            Log out
          </button>
        </section>
      </Container>
    </main>
  );
}
