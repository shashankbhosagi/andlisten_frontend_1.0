import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import TextWithHover from "../components/shared/TextWithHover";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETResuest } from "../utils/serverHelpers";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);

  const playSound = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);

    sound.play();
  };

  useEffect(() => {
    //Fetch data
    const getData = async () => {
      const response = await makeAuthenticatedGETResuest("/song/get/mysongs");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="h-full w-full flex">
        {/* First div will be the left panel */}
        <div className="h-full bg-black w-1/5 flex flex-col justify-between pb-10">
          <div>
            {/* This one for logo */}
            <div className="logoDiv p-6">
              <img src={spotify_logo} alt="spotify logo" width={125} />
            </div>
            <div className="py-5">
              <IconText iconName="material-symbols:home" displayText="Home" />
              <IconText
                iconName="material-symbols:search-rounded"
                displayText="Search"
              />
              <IconText
                iconName="fluent:library-28-regular"
                displayText="Library"
              />
              <IconText
                iconName="ic:baseline-library-music"
                displayText="My Music"
                active
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
        {/* //TODO: Remove that inline css(background) euu!!!! */}
        <div
          className="h-full w-4/5 overflow-auto"
          style={{ background: `#121212` }}
        >
          <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
            <div className="w-1/2 flex h-full items-center">
              <div className="w-2/3 flex justify-around">
                <TextWithHover displayText="Premium" />
                <TextWithHover displayText="Support" />
                <TextWithHover displayText="Download" />
              </div>
              <div className="h-1/2 border-r border-white"></div>
              <div className="w-1/3 flex justify-around h-full items-center">
                <TextWithHover displayText="Upload Song" />
                <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                  SB
                </div>
              </div>
            </div>
          </div>
          <div className="content p-8 overflow-auto">
            <div className="text-white text-xl pb-4 pl-2 font-semibold">
              My Songs
            </div>
            <div className="space-y-3 overflow-auto">
              {songData.map((item) => {
                return <SingleSongCard info={item} playSound={playSound} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMusic;
