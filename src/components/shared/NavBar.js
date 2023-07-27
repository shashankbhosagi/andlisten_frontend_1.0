// import { Icon } from "@iconify/react";
// import spotify_logo from "../assets/images/spotify_logo.svg";
// import IconText from "../components/shared/IconText";
// import SideBarComponent from "../components/shared/SideBar";
import TextWithHover from "../../components/shared/TextWithHover";
const NavBar = () => {
  return (
    <>
      {/* //TODO: Remove that inline css(background) euu!!!! */}
      <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
        <div className="w-1/2 flex h-full items-center">
          <div className="w-3/5 flex justify-around">
            <TextWithHover displayText="Premium" />
            <TextWithHover displayText="Support" />
            <TextWithHover displayText="Download" />
          </div>
          <div className="h-1/2 border-r border-white"></div>
          <div className="w-2/5 flex justify-around h-full items-center">
            <TextWithHover displayText="Sign Up" />
            <div className="bg-white text-black h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
              Log In
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
