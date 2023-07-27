import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";

const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex flex-col items-center">
        {/* here we will have two input email and password and will have signup instead button*/}
        <div className="font-bold mb-4 text-2xl">
          Sigup for free to start listening.
        </div>
        <TextInput
          label="Email address"
          placeholder="Enter Your Email"
          type="text"
          className="my-6"
        />
        <TextInput
          label="Confirm Email address"
          placeholder="Enter Your Email again"
          type="text"
          className="mb-6"
        />
        <TextInput
          label="Password"
          placeholder="Enter a strong Password"
          type="password"
        />
        <TextInput
          label="Enter your username"
          placeholder="Enter a profile name"
          type="text"
          className="my-6"
        />
        <div className=" w-full flex items-center justify-center my-8">
          <button className="bg-green-300 font-semibold p-3 px-10 rounded-full">
            SIGN UP
          </button>
        </div>
        <div className="w-full border border-solid border-gray-400"></div>
        <div className="font-semibold my-6 text-lg">
          Already have an account ??
        </div>

        <div className="border border-gray-500 text-gray-500 font-bold p-3 w-full flex items-center justify-center rounded-full">
          <Link to="/login">LOG IN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
