import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex flex-col items-center">
        {/* here we will have two input email and password and will have signup instead button*/}
        <div className="font-bold mb-6">To continue, log in to andListen!</div>
        <TextInput
          label="Email address or UserName"
          placeholder="Email address or UserName"
          type="text"
          className="my-6"
        />
        <TextInput label="Password" placeholder="Password" type="password" />
        <div className=" w-full flex items-center justify-end my-8">
          <button className="bg-green-300 font-semibold p-3 px-10 rounded-full">
            LOG IN
          </button>
        </div>
        <div className="w-full border border-solid border-gray-400"></div>
        <div className="font-semibold my-6 text-lg">
          Don't have an account ??
        </div>

        <div className="border border-gray-500 text-gray-500 font-bold p-3 w-full flex items-center justify-center rounded-full">
          <Link to="/signup">SIGN UP FOR &Listen</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;