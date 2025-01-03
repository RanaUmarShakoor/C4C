import clsx from "clsx";
import React, { useState } from "react";
import { Navbar } from "components/Navbar";
import { Container } from "components/Container";

import user_pfp0 from "assets/user_pfp0.png";
import {
  CleaningDropdown,
  CleaningDropdown2,
} from "components/CleaningDropdown";
import { Rating } from "components/Rating";
import { Input, TextArea } from "./common";
import { Link } from "react-router-dom";

const reviews = [
  {
    pfp: user_pfp0,
    username: "Jozko Mrkvicka",
    comment:
      "Volám sa Ela. Mám dlhoročné skúsenosti s upratovaním v súkromí aj v reštauráciách. Mám skúsenosti aj z Anglicka, kde som upratovala v sukromi, robila som hausekeeperku-dogsiterk...",
    rating: 4,
  },
];

const WorkGroup = (
  <svg
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 8C14.3 8 12.43 8.34 11 9C9.57 8.33 7.7 8 6.5 8C4.33 8 0 9.08 0 11.25V14H22V11.25C22 9.08 17.67 8 15.5 8ZM11.5 12.5H1.5V11.25C1.5 10.71 4.06 9.5 6.5 9.5C8.94 9.5 11.5 10.71 11.5 11.25V12.5ZM20.5 12.5H13V11.25C13 10.79 12.8 10.39 12.48 10.03C13.36 9.73 14.44 9.5 15.5 9.5C17.94 9.5 20.5 10.71 20.5 11.25V12.5ZM6.5 7C8.43 7 10 5.43 10 3.5C10 1.57 8.43 0 6.5 0C4.57 0 3 1.57 3 3.5C3 5.43 4.57 7 6.5 7ZM6.5 1.5C7.6 1.5 8.5 2.4 8.5 3.5C8.5 4.6 7.6 5.5 6.5 5.5C5.4 5.5 4.5 4.6 4.5 3.5C4.5 2.4 5.4 1.5 6.5 1.5ZM15.5 7C17.43 7 19 5.43 19 3.5C19 1.57 17.43 0 15.5 0C13.57 0 12 1.57 12 3.5C12 5.43 13.57 7 15.5 7ZM15.5 1.5C16.6 1.5 17.5 2.4 17.5 3.5C17.5 4.6 16.6 5.5 15.5 5.5C14.4 5.5 13.5 4.6 13.5 3.5C13.5 2.4 14.4 1.5 15.5 1.5Z"
      fill="currentColor"
    />
  </svg>
);

function GroupCheckBox() {
  const [checked, setChecked] = useState(false);
  return (
    <label
      className={clsx(
        "flex items-center gap-x-3 cursor-pointer select-none",
        checked ? "text-orange-500" : "text-gray-500"
      )}
    >
      <div className="inline-flex items-center">
        <div
          className={clsx(
            "relative flex items-center p-1 border-2 rounded-full",
            checked ? "border-orange-500" : "border-gray-500"
          )}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            className={clsx(
              "before:content[''] peer relative h-3.5 w-3.5 cursor-pointer appearance-none rounded-full before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 checked:border-orange-500 checked:bg-orange-500 checked:before:bg-orange-500 hover:before:opacity-0",
              ""
            )}
          />
        </div>
      </div>
      We work as a group
      {WorkGroup}
    </label>
  );
}

function PersonalInformation() {
  return (
    <div className="flex-1 md:py-10">
      <h1 className="text-xl font-medium">Personal Information</h1>
      <div className="space-y-6 mt-6">
        <Input defaultValue="Jozko" label={"Name"} />
        <Input defaultValue="Mrkvička" label={"Surname"} />
        <Input defaultValue="Mrkvička@gmail.com" label={"Email"} />
        <Input defaultValue="0978 787 900" label={"Mobile Number"} />

        <div>
          <h1 className="mb-1">What am I cleaning ?</h1>

          <CleaningDropdown
            type={2}
            defaultOption={2}
            onDropChange={() => {}}
            className="min-w-[380px]"
          />
        </div>

        <div className="flex items-center py-10 max-md:hidden">
          <h1 className="font-medium mr-8">Your Rating</h1>
          <Rating rating={4} size={36} fillColor="#FF6B00" />
        </div>
      </div>
    </div>
  );
}

function AdditionalInformation() {
  return (
    <div className="flex-1 md:py-10">
      <h1 className="text-xl font-medium">Additional Information</h1>

      <div className="space-y-6 mt-6">
        <Input
          defaultValue="30"
          label={"Hourly rate"}
          right={<p className="text-[#9A9A9A] px-2 border-l-2">€ / Hod</p>}
        />
        <Input
          defaultValue="Bratislava, Trnava, Nitra, Sládkovičovo, Galanta"
          label={"Choose the cities where you clean"}
        />
        <TextArea
          defaultValue="My name is Ela. I have many years of experience in cleaning both privately and in restaurants. I also have experience from England, where I cleaned in Sukra, worked as a housekeeper-dog sitter..."
          label={"Write something about yourself"}
        />
        <GroupCheckBox />
      </div>
    </div>
  );
}

export function OrangeSettings() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar type={1} login={true} />
      <Container className="flex-1 flex justify-center gap-10 relative z-0">
        <section
          style={{ fontFamily: "Prompt" }}
          className="p-4 flex flex-1 rounded-2xl shadow-customBlack max-md:flex-col md:gap-x-4 lg:gap-x-24"
        >
          <div className="shrink-0 flex flex-col items-center">
            <h2 className="text-3xl font-medium">Jožko Mrkvička</h2>
            <img src="/settings-clean.png" className="md:w-full mt-5" />

            <div className="flex items-center justify-between flex-wrap mt-4 md:hidden">
              <h1 className="font-medium mr-8">Your Rating</h1>
              <Rating rating={4} size={36} fillColor="#FF6B00" />
            </div>

            <h4 className="text-center my-4 text-lg font-medium">Show My ad</h4>

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
            </label>
            <p className="mt-1">Active</p>

            <div className="flex-1" />

            <Link
              to="/?modalNumber=5"
              className="text-orange-500 underline max-md:hidden"
            >
              Change Password
            </Link>

            <button className="mt-4 py-3 px-5 self-stretch orange-btn rounded-lg max-md:hidden">
              Log out
            </button>

            {/*  */}
          </div>

          <PersonalInformation />
          {/* <div className="flex-1" /> */}
          <AdditionalInformation />

          <div className="flex items-center justify-between flex-wrap py-10 md:hidden">
            <h1 className="font-medium mr-8">Your Rating</h1>
            <Rating rating={4} size={36} fillColor="#FF6B00" />
          </div>

          <div className="flex flex-col gap-2 md:hidden max-h-[400px] overflow-y-scroll">
            <Review data={reviews[0]} />
            <Review data={reviews[0]} />
            <Review data={reviews[0]} />
          </div>

          <Link
            to="/?modalNumber=5"
            className="text-orange-500 underline md:hidden self-center mt-4"
          >
            Change Password
          </Link>

          <button className="mt-4 py-3 px-5 self-stretch orange-btn rounded-lg md:hidden">
            Log out
          </button>
        </section>
      </Container>
    </main>
  );
}

function Review({ data }) {
  return (
    <div
      style={{ fontFamily: "Prompt" }}
      className="flex gap-8 p-2 border-[1px] border-[#E4E4E4] rounded-2xl items-center"
    >
      <div className="flex flex-col gap-2 shrink-0 items-center">
        <img src={data.pfp} alt="" className="w-24 object-contain" />
        <Rating size={32} rating={data.rating} fillColor="#FF6B00" />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="">{data.username}</h5>
        <p className="text-sm text-[#9A9A9A]">
          Good, i will order this person again! Always super clean Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <a href="#" className="text-orange-500 hover:text-orange-800 underline">
          Zobraziť viac
        </a>
      </div>
    </div>
  );
}
