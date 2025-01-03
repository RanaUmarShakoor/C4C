import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";

import cross_blue_icon from "./../assets/cross_blue_icon.png";
import { useSearchParams } from "react-router-dom";

export function SubscriptionModal() {
  const [params] = useSearchParams();

  // 1 = default
  // 2 = green
  const paramModalNumber = params.has("modalNumber")
    ? +params.get("modalNumber")
    : 0;

  // console.log(paramModalNumber);

  let [open, setOpen] = React.useState(
    paramModalNumber === 1 || paramModalNumber === 2
  );

  // open = true;

  const handleClose = () => {
    setOpen(false);
  };

  // children = React.Children.only(children);
  // const handleElement =
  //   children &&
  //   React.cloneElement(children, {
  //     onClick: () => {
  //       setOpen(true);
  //     },
  //   });

  return (
    <React.Fragment>
      {/* {handleElement} */}
      <Dialog open={open} onClose={() => {}} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <ModalBody
              onClose={handleClose}
              paramModalNumber={paramModalNumber}
            />
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

function ModalBody({ onClose, paramModalNumber }) {
  return (
    <Dialog.Panel
      style={{
        boxShadow: "0px 4px 14px 0px #00000040",
      }}
      className="mx-auto rounded-3xl bg-white w-[95vw] max-w-[1000px] px-4  md:px-12 py-6"
    >
      <div className="flex flex-row-reverse">
        <button
          className={clsx(
            `w-7 md:w-10 h-7 md:h-10 flex items-center justify-center border-[1px] rounded lg:rounded-lg border-blue-500 bg-white`,
            "hover:bg-blue-500/10 tc"
          )}
          onClick={onClose}
        >
          <img
            src={cross_blue_icon}
            alt=""
            className="w-5 md:w-8 h-5 md:h-8 object-contain"
          />
        </button>
      </div>
      <h1 className="text-5xl font-semibold text-center">
        Choose the type of subscription
      </h1>
      <p className="text-center mt-6 text-[#626262] font-['Prompt'] max-w-3xl mx-auto">
        After choosing one of the subscriptions, you will see all the numbers of
        all cleaners until your subscription is valid.
      </p>

      <CardFlow paramModalNumber={paramModalNumber} />

      <div className="flex justify-center items-center mt-16 gap-x-16">
        <button className="hover:bg-black/10 p-2 rounded-md">
          <img src="/flat-arrow.svg" />
        </button>
        <button
          className={clsx(
            "py-2 px-4",
            "self-stretch rounded-lg transition-colors",
            "border border-blue-500 text-blue-500",
            "hover:bg-blue-600 hover:text-white font-medium"
          )}
          onClick={onClose}
        >
          Close
        </button>
        <button className="hover:bg-black/10 p-2 rounded-md">
          <img src="/flat-arrow.svg" className="rotate-180" />
        </button>
      </div>
    </Dialog.Panel>
  );
}

function CardFlow({ paramModalNumber }) {
  const [active, setActive] = useState(paramModalNumber === 2);

  return (
    <div className="flex mt-20 md:mx-10 relative">
      <Card
        title="Monthly subscription"
        primaryPrice={10}
        secondaryPrice={10}
      />
      <Card
        title="Annual subscription"
        primaryPrice={70}
        secondaryPrice={"5,80"}
        highlight
        active={active}
        onBuy={() => setActive(true)}
      />
      <Card
        title="Half-yearly subscription"
        primaryPrice={45}
        secondaryPrice={"7,50"}
      />
    </div>
  );
}

function Card({
  highlight = false,
  active = false,
  onBuy = () => {},
  primaryPrice,
  secondaryPrice,
  title,
}) {
  return (
    <div
      style={{
        boxShadow: "0px 4px 14px 0px #00000040",
      }}
      className={clsx(
        "flex-1 font-['Prompt'] py-6 flex flex-col items-center rounded-lg bg-white relative",
        highlight ? "border-[#0094FF] border-2" : "opacity-70",
        highlight && "scale-[1.15] z-50",
        highlight &&
          "max-md:absolute max-md:w-[50%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-0 max-md:bottom-0 md:px-2",
        highlight && [
          "max-xxs:min-h-[50vh] max-xxs:translate-y-[-70px]",
          "max-xs:min-h-[45vh] max-xs:translate-y-[-50px]",
          "max-sm:min-h-[40vh] max-sm:translate-y-[-40px]",
          "max-md:min-h-[35vh] max-md:translate-y-[-20px]",
        ],
        active && "overflow-hidden"
      )}
    >
      {!active && highlight && (
        <div
          className={clsx(
            "bg-[#0094FF] text-white text-[0.8rem] px-2 py-1 rounded absolute",
            "top-0 -translate-y-1/2"
          )}
        >
          Favorable offer
        </div>
      )}

      <h1 className="text-[#626262] text-center text-xl font-medium px-6">
        {title}
      </h1>
      <p className="text-[#333333] text-center text-2xl font-medium mt-4">
        {primaryPrice} €
      </p>
      <p className="text-[#9A9A9A] text-center text-lg font-medium max-md:text-[0.9rem]">
        {secondaryPrice}€ / Monthly
      </p>

      {active ? (
        <>
          <div className="text-center bg-[#60A600] text-white self-stretch mx-4 rounded-md py-2">
            <p className="max-md:text-[0.6rem]">Currently purchased</p>
            <p className="text-sm max-md:text-[0.7rem] mt-1.5">Renewal 30.11.2023</p>
          </div>

          <p className="text-[#626262] text-center leading-none mt-4 px-3 text-sm max-md:text-[0.72rem] md:hidden">
            After canceling your subscription, you will enjoy all its benefits
            until the date indicated at the time of renewal.
          </p>

          <button
            className={clsx(
              "py-1 px-2 mt-3 text-xs",
              "md:py-2 md:px-5 md:mt-3 md:text-base",
              " rounded-lg transition-colors",
              "border border-[#FF1F00] text-[#FF1F00]",
              "hover:bg-[#FF1F00] hover:text-white font-medium"
            )}
          >
            Cancel <br className="md:hidden" /> subscription
          </button>

          <p className="text-[#626262] text-center leading-none mt-4 px-3 text-sm max-md:text-[0.72rem] max-md:hidden">
            After canceling your subscription, you will enjoy all its benefits
            until the date indicated at the time of renewal.
          </p>
        </>
      ) : (
        <>
          <p className="text-[#626262] text-center leading-none mt-4 px-4">
            You will have access to all cleaners' numbers for the entire
            duration of the program
          </p>

          <button
            onClick={onBuy}
            className={clsx(
              "mt-5 py-2 px-5 tc rounded-lg",
              highlight
                ? "bg-[#0094FF] hover:bg-[#3178aa] text-white"
                : "bg-[#E4E4E4] hover:bg-[#bebebe]"
            )}
          >
            Buy
          </button>
        </>
      )}
    </div>
  );
}
