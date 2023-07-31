import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnaunthenticatedPOSTRequest } from "../utils/serverHelpers";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };
    const response = await makeUnaunthenticatedPOSTRequest("/auth/login", data);
    if (response && !response.err) {
      console.log(response.usertoReturn);
      const token = response.usertoReturn.token;
      const date = new Date();
      date.setDate(date.getDate + 30);
      setCookies("token", token, { path: "/", expires: date });
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
        <div className="font-bold mb-6">To continue, log in to andListen!</div>
        <TextInput
          label="Email address or UserName"
          placeholder="Email address or UserName"
          type="text"
          className="my-6"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <div className=" w-full flex items-center justify-end my-8">
          <button
            className="bg-green-300 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
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
