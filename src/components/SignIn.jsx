import { useState } from "react";
import { FormInput } from "./FormInput";
import user from "./../assets/user_icon.png";
import { Container } from "./Container";

export function SignIn() {
  const [modalNumber, setModalNumber] = useState(0);

    function modalHandler(number)
    {
        setModalNumber(number);
    }

    let content = "";
    if(modalNumber==0)
    {
        content = <SignInModal onModalChange={modalHandler} />
    }
    else if(modalNumber==1)
    {
        content = <ForgottenPasswordModal_1 onModalChange={modalHandler} />
    }
    else if(modalNumber==2)
    {
        content = <ForgottenPasswordModal_2 onModalChange={modalHandler} />
    }
    else if(modalNumber==3)
    {
        content = <ForgottenPasswordModal_3 onModalChange={modalHandler} />
    }


  return (
    <>
      {content}
    </>
  );
}

function SignInModal({onModalChange}) {

    function clickHandler(){
        onModalChange(1)
    }

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Sign In
      </h1>
      <FormInput
        label="Email"
        type="email"
        placeholder="Mrkvička@gmail.com"
        color={2}
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="**********"
        color={2}
      />
      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <img src={user} alt="" className="w-4 h-4 object-contain" />
          <p>Sign In</p>
        </div>
      </button>
      <button onClick={clickHandler} className=" font-medium text-blue-500 underline text-center">
        Forgot your password?
      </button>
    </div>
  );
}

function ForgottenPasswordModal_1({onModalChange}) {

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Forgotten password
      </h1>
      <FormInput
        label="Email"
        type="email"
        placeholder="Mrkvička@gmail.com"
        color={2}
      />
      <button onClick={()=>{onModalChange(2)}} className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <p>Send Verification code</p>
        </div>
      </button>
      <button onClick={()=>{onModalChange(0)}} className=" font-medium text-blue-500 underline text-center">
        Back
      </button>
    </div>
  );
}

function ForgottenPasswordModal_2({onModalChange}) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Forgotten password
      </h1>
      <FormInput
        label="Enter the verification code from your Email"
        type="text"
        placeholder="123456"
        color={2}
      />

      <button onClick={()=>{onModalChange(3)}} className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <p>Confirm</p>
        </div>
      </button>
      <div className="flex flex-col gap-3">
        <button className=" font-medium text-blue-500 underline text-center">
          Send the code again
        </button>
        <button
          onClick={()=>{onModalChange(1)}}
          className=" font-medium text-blue-500 underline text-center"
        >
          Back
        </button>
      </div>
    </div>
  );
}

function ForgottenPasswordModal_3({onModalChange}) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Forgotten password
      </h1>
      <FormInput
        label="Enter your new password"
        type="password"
        placeholder="**********"
        color={2}
      />
      <FormInput
        label="Repeat the password"
        type="password"
        placeholder="**********"
        color={2}
      />

      <button onClick={()=>{onModalChange(0)}} className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <p>Change password</p>
        </div>
      </button>
      <button onClick={()=>{onModalChange(2)}} className=" font-medium text-blue-500 underline text-center">
        Back
      </button>
    </div>
  );
}
