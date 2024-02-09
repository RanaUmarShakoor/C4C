import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Container} from "./Container";
import logo from "./../assets/logo.png";
import user_icon from "./../assets/user_icon.png";
import flag_1 from "./../assets/flag_1.png";
import burger_icon from "./../assets/burger_icon.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <Container className="bg-white">
        <div className="flex-1 flex justify-between">
          <div className="lg:hidden">
            <Menu
              width={280}
              noOverlay
              customBurgerIcon={<img src={burger_icon} />}
            >
              <a href="" className="font-semibold text-base">
                Home
              </a>
              <a href="" className="font-semibold text-base">
                How it works?
              </a>
            </Menu>
          </div>
          <img src={logo} alt="" className="w-10 md:w-14 lg:w-20 h-fit" />
          <div className="hidden lg:flex items-center gap-8">
            <a href="" className="font-semibold text-base">
              How it works?
            </a>
            <a href="" className="font-semibold text-base">
              Home
            </a>
          </div>
        </div>
        <div className="w-[48%] lg:flex-1 flex justify-end items-center gap-4 lg:gap-8">
          <button className="hidden lg:block px-2 py-2 border-2 rounded-[8px] border-blue-500 text-blue-500">
            <p className="text-base font-normal">Login</p>
          </button>
          <button className=" px-2 py-2 lg:border-2 rounded-[8px] bg-blue-500 border-blue-500 text-white">
            <div className="flex items-center justify-center gap-2 w-7 lg:w-auto">
              <img src={user_icon} alt="" className="w-[14px] h-fit" />
              <p className="hidden lg:block text-base font-normal">
                Registration
              </p>
            </div>
          </button>
          <button className=" lg:px-2 lg:py-2 lg:border-2 rounded-[8px] bg-white border-blue-500 text-black">
            <div className="flex items-center gap-2">
              <img src={flag_1} alt="" className="w-9 lg:w-7 h-fit" />
              <p className="hidden lg:block text-base font-normal">SVK</p>
            </div>
          </button>
        </div>
      </Container>
    </>
  );
}
