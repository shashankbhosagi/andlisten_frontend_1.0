import { useState } from "react";
import LoggedInContainers from "../Containers/LoggedInContainers";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETResuest } from "../utils/serverHelpers";
// import { isHtmlElement } from "react-router-dom/dist/dom";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    //THis function will call searchapi
    const response = await makeAuthenticatedGETResuest(
      "/song/get/songname/" + searchText
    );
    setSongData(response.data);
    console.log(response);
  };

  return (
    <>
      <LoggedInContainers currentActiveScreen="search">
        <div className="w-full py-6">
          <div
            className={`flex space-x-3 items-center w-1/2 p-3 text-sm rounded-full bg-gray-800 px-5 ${
              isInputFocused ? "border border-white" : ""
            }`}
          >
            <div className="text-white">
              <Icon icon="ic:outline-search" className="text-lg" />
            </div>
            <input
              className="w-full bg-gray-800 focus:outline-none text-white"
              type="text"
              placeholder="What do you want to listen"
              onFocus={() => {
                setIsInputFocused(true);
              }}
              onBlur={() => {
                setIsInputFocused(false);
              }}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                // console.log(e)
                if (e.key === "Enter") {
                  searchSong();
                }
              }}
            />
          </div>

          {songData.length > 0 ? (
            <div className="pt-10 space-y-3">
              <div className="text-white">
                SHowing search results for "
                <span className="font-bold">{searchText}</span>"
              </div>
              {songData.map((item) => {
                return (
                  <SingleSongCard
                    info={item}
                    key={JSON.stringify(item)}
                    playSound={() => {}}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-white pt-10">Nothing to show here</div>
          )}
        </div>
      </LoggedInContainers>
    </>
  );
};

export default SearchPage;
