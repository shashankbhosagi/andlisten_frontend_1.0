import { Icon } from "@iconify/react";
import andlisten_logo from "../../assets/images/logo_with_name_new.png";
import IconText from "../../components/shared/IconText";
const SideBarComponent = () => {
  return (
    <>
      {/* First div will be the left panel */}
      <div className="h-full bg-black w-1/5 flex flex-col justify-between pb-10">
        <div>
          {/* This one for logo */}
          <div className="logoDiv p-6">
            {/* <img src={andlisten_logo} alt="andlisten logo" width={125} />  */}
          </div>
          <div className="py-5">
            <IconText
              iconName="material-symbols:home"
              displayText="Home"
              active
            />
            <IconText
              iconName="material-symbols:search-rounded"
              displayText="Search"
            />
            <IconText
              iconName="fluent:library-28-regular"
              displayText="Library"
            />
          </div>
          <div className="pt-5">
            <IconText
              iconName="icon-park-outline:add"
              displayText="Create Playlist"
            />
            <IconText
              iconName="mdi:heart-box-outline"
              displayText="Liked Songs"
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-solid border-gray-400 text-white flex items-center justify-center rounded-full w-2/5 px-1 py-1 hover:border-white cursor-pointer">
            <Icon icon="ph:globe" fontSize={22} />
            <div className="ml-2 text-sm text-semibold">English</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarComponent;
