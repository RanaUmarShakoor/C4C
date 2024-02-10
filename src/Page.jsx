import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";

import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

import map_bg from './assets/map_bg.png'
import star_user from "./assets/star_user.png";
import cleaning_icon from "./assets/cleaning_icon.png";
import info_icon from "./assets/info_icon.png";
import user from "./assets/user_icon.png";
import user_orange from "./assets/user_orange_icon.png";

export function Page() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />
      <Container style={{backgroundImage: `${map_bg}`}}  className="flex-1 flex items-center justify-center relative z-1">
        <img src={map_bg} alt="" className="absolute overflow-hidden -z-20 top-0 left-0 w-full h-full object-cover" />
        <div className="flex absolute -z-10 h-full w-full">
          <div className="flex-1 bg-gradient-to-r from-[#FFA50000] to-[#FFA5004D]"  />
          <div className="flex-1 bg-gradient-to-r from-[#0070FF4D] to-[#0070FF1A]"  />
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 p-8 rounded-[8px] lg:bg-[#000000B2]">
          <Block
            photo={star_user}
            heading="Do you offer cleaning services?"
            subheading="Register as a cleaner"
            type="1"
          />
          <Block
            photo={cleaning_icon}
            heading="Looking for cleaning?"
            subheading="Register as a user"
            type="2"
          />
        </div>
        {/* <RegisterUserModal /> */}

        {/* <ForgottenPasswordModal_3 /> */}
        {/* <RegistrationSuccesModal /> */}
      </Container>
    </main>
  );
}

function Block({ photo, heading, subheading, type = "1" }) {
  let background = " bg-orange-500";
  if (type === "2") background = " bg-blue-500";

  return (
    <div className="flex-1 flex flex-col items-center gap-6 py-6 lg:py-0 px-4 lg:px-0 rounded-[8px] lg:text-white text-center bg-white lg:bg-transparent">
      <div className={"p-3 rounded-full" + background}>
        <img src={photo} alt="" className="h-10 w-10 object-contain" />
      </div>
      <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
        {heading}
      </h3>
      <div className="flex flex-col gap-6 mt-auto">
        <a href="">
          <h4 className="font-semibold text-base md:text-xl lg:text-2xl">
            {subheading}
          </h4>
        </a>
        <button className={" py-2 rounded-lg" + background}>
          <div className="flex items-center justify-center gap-2 text-white">
            <img src={user} alt="" className="w-5 h-5 object-contain" />
            <p>Sign In</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function RegisterCleanerModal() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <div className="hidden lg:flex justify-center">
        <div className={"p-3 rounded-full bg-orange-500"}>
          <img src={star_user} alt="" className="h-10 w-10 object-contain" />
        </div>
      </div>
      <FormInput
        label="Name and surname"
        type="text"
        placeholder="Jozko Mrkvicka"
      />
      <FormInput label="Email" type="email" placeholder="Mrkvička@gmail.com" />
      <FormInput label="Password" type="password" placeholder="**********" />
      <FormInput label="Mobile number" type="text" placeholder="0900 000 000" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <label htmlFor="" className="font-medium">
            Upload your photo ID
          </label>
          <img src={info_icon} alt="" className="h-5 w-5 object-contain" />
        </div>
        <button className={" py-2 rounded-lg border-[1px] border-orange-500"}>
          <div className="flex items-center justify-center gap-2 text-orange-500">
            <img src={user_orange} alt="" className="w-5 h-5 object-contain" />
            <p>Upload 2 photos</p>
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          checked={false}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#FF6B00",
                alignSelf: "stretch",
              }}
            >
              <Icon.FiCheck color="white" size={20} />
            </div>
          }
          borderColor="#174A41"
          borderWidth={1}
          borderRadius={20}
          style={{ overflow: "hidden" }}
          size={20}
          label="I agree with the general terms and conditions"
        />
        <Checkbox
          checked={false}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#FF6B00",
                alignSelf: "stretch",
              }}
            >
              <Icon.FiCheck color="white" size={20} />
            </div>
          }
          borderColor="#174A41"
          borderWidth={1}
          borderRadius={20}
          style={{ overflow: "hidden" }}
          size={20}
          label="I agree to the sending of marketing news"
        />
      </div>

      <button className={" py-2 rounded-lg bg-orange-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <img src={user} alt="" className="w-5 h-5 object-contain" />
          <p>Register</p>
        </div>
      </button>
      <div className="flex md:hidden justify-center">
        <button className="font-medium px-1 py-[0.5px] border-[1px] rounded-md border-orange-500 text-orange-500 bg-[#F0F2F5] text-center">
          Close
        </button>
      </div>
    </div>
  );
}

function RegisterUserModal(){
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <div className="hidden lg:flex justify-center">
        <div className={"p-3 rounded-full bg-blue-500"}>
          <img src={cleaning_icon} alt="" className="h-10 w-10 object-contain" />
        </div>
      </div>
      <FormInput
        label="Name"
        type="text"
        placeholder="Jozko"
        color={2}
      />
      <FormInput
        label="Surname"
        type="text"
        placeholder="Mrkvička"
        color={2}
      />
      <FormInput label="Email" type="email" placeholder="Mrkvička@gmail.com" color={2} />
      <FormInput label="Password" type="password" placeholder="**********" color={2} />
      <FormInput label="Repeat the password" type="password" placeholder="**********" color={2} />
      <FormInput label="Mobile number" type="text" placeholder="0900 000 000" color={2} />
      
      <div className="flex flex-col gap-2">
        <Checkbox
          checked={false}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#0094FF",
                alignSelf: "stretch",
              }}
            >
              <Icon.FiCheck color="white" size={20} />
            </div>
          }
          borderColor="#174A41"
          borderWidth={1}
          borderRadius={20}
          style={{ overflow: "hidden" }}
          size={20}
          label="I agree with the general terms and conditions"
        />
        <Checkbox
          checked={false}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#0094FF",
                alignSelf: "stretch",
              }}
            >
              <Icon.FiCheck color="white" size={20} />
            </div>
          }
          borderColor="#174A41"
          borderWidth={1}
          borderRadius={20}
          style={{ overflow: "hidden" }}
          size={20}
          label="I agree to the sending of marketing news"
        />
      </div>

      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <img src={user} alt="" className="w-3 h-3 object-contain" />
          <p>Register</p>
        </div>
      </button>
      <div className="flex md:hidden justify-center">
        <button className="font-medium px-1 py-[0.5px] border-[1px] rounded-md border-blue-500 text-blue-500 bg-[#F0F2F5] text-center">
          Close
        </button>
      </div>
    </div>
  )
}

function SignInModal() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Sign In
      </h1>
      <div className="flex flex-col gap-1 w-[300px] md:w-[360px]">
        <label htmlFor="" className="font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="Mrkvička@gmail.com"
          className=" px-4 py-2  border-[1px] rounded-md border-blue-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="font-medium">
          Password
        </label>
        <input
          type="password"
          placeholder="**********"
          className="px-4 py-2  border-[1px] rounded-md border-blue-500"
        />
      </div>
      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <img src={user} alt="" className="w-5 h-5 object-contain" />
          <p>Register</p>
        </div>
      </button>
      <a href="" className=" font-medium text-blue-500 underline text-center">
        Forgot your password?
      </a>
    </div>
  );
}

function ForgottenPasswordModal_1() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Forgotten password
      </h1>
      <div className="flex flex-col gap-1 w-[300px] md:w-[360px]">
        <label htmlFor="" className="font-medium">
          Enter your Email
        </label>
        <input
          type="email"
          placeholder="Mrkvička@gmail.com"
          className=" px-4 py-2 border-[1px] rounded-md border-blue-500"
        />
      </div>
      {/* <div className="flex flex-col gap-1">
                <label htmlFor="" className="font-medium">Password</label>
                <input type="password" placeholder="**********" className="px-4 py-2  border-2 rounded-md border-blue-500" />
            </div> */}
      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          {/* <img src={user} alt="" className="w-5 h-5 object-contain" /> */}
          <p>Send Verification code</p>
        </div>
      </button>
      <a href="" className=" font-medium text-orange-500 underline text-center">
        Back
      </a>
    </div>
  );
}

function ForgottenPasswordModal_2() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Forgotten password
      </h1>
      <div className="flex flex-col gap-1 w-[300px] md:w-[360px]">
        <label htmlFor="" className="font-medium">
          Enter the verification code from your Email
        </label>
        <input
          type="text"
          placeholder="123456"
          className=" px-4 py-2 border-[1px] rounded-md border-blue-500"
        />
      </div>
      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <p>Confirm</p>
        </div>
      </button>
      <div className="flex flex-col gap-3">
        <a href="" className=" font-medium text-blue-500 underline text-center">
          Send the code again
        </a>
        <a
          href=""
          className=" font-medium text-orange-500 underline text-center"
        >
          Back
        </a>
      </div>
    </div>
  );
}

function ForgottenPasswordModal_3() {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Forgotten password
      </h1>
      <div className="flex flex-col gap-1 w-[300px] md:w-[360px]">
        <label htmlFor="" className="font-medium">
          Enter your new password
        </label>
        <input
          type="password"
          placeholder="**********"
          className=" px-4 py-2 border-[1px] rounded-md border-blue-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="font-medium">
          Repeat the password
        </label>
        <input
          type="password"
          placeholder="**********"
          className="px-4 py-2  border-[1px] rounded-md border-blue-500"
        />
      </div>
      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <p>Change password</p>
        </div>
      </button>
      <a href="" className=" font-medium text-orange-500 underline text-center">
        Back
      </a>
    </div>
  );
}

function RegistrationSuccesModal() {
  return (
    <div className="flex flex-col gap-10 p-6 rounded-[8px] bg-white">
      <h1 className=" font-semibold text-2xl text-blue-500 text-center">
        Registration was successful
      </h1>

      <button className={" py-2 rounded-lg bg-blue-500"}>
        <div className="flex items-center justify-center gap-2 text-white">
          <p>Sign In</p>
        </div>
      </button>
    </div>
  );
}

function FormInput({ label, type, placeholder, color = 1 }) {
  let border = " border-orange-500";
  if (color == 2) border = " border-blue-500";

  return (
    <div className="flex flex-col gap-1 md:w-[360px]">
      <label htmlFor="" className="font-medium">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={"px-4 py-2  border-[1px] rounded-md " + border}
      />
    </div>
  );
}
