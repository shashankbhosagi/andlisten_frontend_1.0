import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
import TextInput from "../components/shared/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeUnaunthenticatedPOSTRequest } from "../utils/serverHelpers";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const signUp = async () => {
    if (email != confirmEmail) {
      alert("Email and confirm email must match. Please check again!!");
      return;
    }
    const data = { email, password, firstName, lastName, username };
    const response = await makeUnaunthenticatedPOSTRequest(
      "/auth/register",
      data
    );
    if (response && !response.err) {
      console.log(response);
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/home");
    } else {
      alert("Failure");
    }
  };

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
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email address"
          placeholder="Enter Your Email again"
          type="text"
          className="mb-6"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <TextInput
          label="Enter your username"
          placeholder="Enter a profile name"
          type="text"
          className="mb-6"
          value={username}
          setValue={setUsername}
        />
        <TextInput
          label="Password"
          placeholder="Enter a strong Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-8">
          <TextInput
            label="First Name"
            placeholder="Enter your First Name"
            type="text"
            className="my-6"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your Last Name"
            type="text"
            className="my-6"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className=" w-full flex items-center justify-center my-8">
          <button
            className="bg-green-300 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
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
