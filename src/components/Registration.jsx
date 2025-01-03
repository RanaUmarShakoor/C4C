

import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { FormInput } from "./FormInput";
import user_orange from "./../assets/user_orange_icon.png";
import star_user from "./../assets/star_user.png";
import cleaning_icon from "./../assets/cleaning_icon.png";
import user from "./../assets/user_icon.png";
import info_icon from "./../assets/info_icon.png";



export function RegisterCleanerModal({onModalChange}) {
    return (
      <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white absolute z-50 top-[50%] -translate-y-[50%] text-black overflow-y-auto max-h-[90vh]">
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

        <button onClick={()=>{onModalChange(4)}} className={" py-2 rounded-lg bg-orange-500"}>
          <div className="flex items-center justify-center gap-2 text-white">
            <img src={user} alt="" className="w-5 h-5 object-contain" />
            <p>Register</p>
          </div>
        </button>
        <div className="flex lg:hidden justify-center">
          <button onClick={()=>{onModalChange(0)}} className="font-medium px-1 py-[0.5px] border-[1px] rounded-md border-orange-500 text-orange-500 bg-[#F0F2F5] text-center">
            Close
          </button>
        </div>
      </div>
    );
  }

  export function RegisterUserModal({onModalChange}) {
    return (
      <div className="flex flex-col gap-4 p-6 rounded-[8px] bg-white overflow-y-auto max-h-[90vh]">
        <div className="hidden lg:flex justify-center">
          <div className={"p-3 rounded-full bg-blue-500"}>
            <img
              src={cleaning_icon}
              alt=""
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>
        <FormInput label="Name" type="text" placeholder="Jozko" color={2} />
        <FormInput label="Surname" type="text" placeholder="Mrkvička" color={2} />
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
        <FormInput
          label="Repeat the password"
          type="password"
          placeholder="**********"
          color={2}
        />
        <FormInput
          label="Mobile number"
          type="text"
          placeholder="0900 000 000"
          color={2}
        />

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

        <button onClick={()=>{onModalChange(4)}} className={" py-2 rounded-lg bg-blue-500"}>
          <div className="flex items-center justify-center gap-2 text-white">
            <img src={user} alt="" className="w-3 h-3 object-contain" />
            <p>Register</p>
          </div>
        </button>
        <div className="flex lg:hidden justify-center">
          <button onClick={()=>{onModalChange(0)}} className="font-medium px-1 py-[0.5px] border-[1px] rounded-md border-blue-500 text-blue-500 bg-[#F0F2F5] text-center">
            Close
          </button>
        </div>
      </div>
    );
  }

  export function RegistrationSuccesModal({onModalChange}) {
    return (
      <div className="flex flex-col gap-10 p-6 rounded-[8px] bg-white">
        <h1 className=" font-semibold text-2xl text-blue-500 text-center">
          Registration was successful
        </h1>

        <button onClick={()=>{onModalChange(3)}} className={" py-2 rounded-lg bg-blue-500"}>
          <div className="flex items-center justify-center gap-2 text-white">
            <p>Sign In</p>
          </div>
        </button>
      </div>
    );
  }
