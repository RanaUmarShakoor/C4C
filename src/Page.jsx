import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import { Background } from "./components/Background";
import { SignIn } from "./components/SignIn";
import {
  RegisterCleanerModal,
  RegisterUserModal,
  RegistrationSuccesModal,
} from "./components/Registration";

import star_user from "./assets/star_user.png";
import cleaning_icon from "./assets/cleaning_icon.png";
import user from "./assets/user_icon.png";
import { useSearchParams } from "react-router-dom";
import { ChangePasswordModal } from "pages/Modals-New/ChangePassword";

export function Page() {
  const [params] = useSearchParams();

  const paramModalNumer = params.has("modalNumber")
    ? +params.get("modalNumber")
    : 0;

  const [modalNumber, setModalNumber] = useState(paramModalNumer);

  useEffect(() => {
    setModalNumber(paramModalNumer);
  }, [paramModalNumer]);

  function modalHandler(number) {
    setModalNumber(number);
  }

  let modal = "";

  if (modalNumber == 1) {
    modal = (
      <div className="absolute w-full flex justify-start">
        <div className="flex-1 flex justify-center lg:justify-end lg:pe-12 relative">
          <RegisterCleanerModal onModalChange={modalHandler} />
        </div>
        <div className="flex-1 hidden lg:block h-1 relative -z-30" />
      </div>
    );
  } else if (modalNumber == 2) {
    modal = (
      <div className="absolute w-full flex justify-end">
        <div className="flex-1 hidden lg:block h-1 relative -z-30" />
        <div className="flex-1 flex justify-center lg:justify-start lg:ps-12 relative">
          <RegisterUserModal onModalChange={modalHandler} />
        </div>
      </div>
    );
  } else if (modalNumber == 3) {
    modal = <SignIn />;
  } else if (modalNumber == 4) {
    modal = <RegistrationSuccesModal onModalChange={modalHandler} />;
  } else if ([5,6].includes(modalNumber)) {
    // 5 = orange
    // 6 = blue
    modal = <ChangePasswordModal color={modalNumber - 4} />
  } else {
    modal = " ";
  }

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />
      <Container className="flex-1 flex items-center justify-center relative z-0">
        <Background />

        {(!modalNumber || [1, 2].includes(modalNumber)) && (
          <div
            className={
              modalNumber != 0
                ? "hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-0 p-8 rounded-[8px] lg:bg-[#000000B2]"
                : "flex flex-col lg:flex-row gap-8 lg:gap-0 p-8 rounded-[8px] lg:bg-[#000000B2]"
            }
          >
            <Block
              photo={star_user}
              heading="Do you offer cleaning services?"
              subheading="Register as a cleaner"
              type={1}
              onModalChange={modalHandler}
            />
            <Block
              photo={cleaning_icon}
              heading="Looking for cleaning?"
              subheading="Register as a user"
              type={2}
              onModalChange={modalHandler}
            />
          </div>
        )}
        {modal}
      </Container>
    </main>
  );
}

function Block({ photo, heading, subheading, type = 1, onModalChange }) {
  let background = " bg-orange-500";
  let textColor = "text-orange-500";
  if (type == 2) {
    background = " bg-blue-500";
    textColor = "text-blue-500";
  }

  function clickHandler() {
    if (type == 1) onModalChange(1);
    else onModalChange(2);
  }

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-6 lg:py-0 px-4 lg:px-0 rounded-[8px] lg:text-white text-center bg-white lg:bg-transparent">
      <div className={"p-3 rounded-full" + background}>
        <img src={photo} alt="" className="h-10 w-10 object-contain" />
      </div>
      <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
        {heading}
      </h3>
      <div className="flex flex-col gap-6 mt-auto max-md:self-stretch">
        <h4 className={"font-semibold text-base md:text-xl lg:text-2xl"}>
          {subheading}
        </h4>
        <button
          onClick={() => {
            // onModalChange(3);
            clickHandler();
          }}
          className={
            "md:self-center px-4 md:px-16 lg:px-20 py-2 rounded-lg" + background
          }
        >
          <div className="flex items-center justify-center gap-2 text-white">
            <img src={user} alt="" className="w-5 h-5 object-contain" />
            <p>Register</p>
          </div>
        </button>
      </div>
    </div>
  );
}
