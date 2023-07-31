import { useState } from "react";
import { Howl, Howler } from "howler";
import PlaylistView from "../components/shared/PlayListView";
import TextWithHover from "../components/shared/TextWithHover";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";

const Songs = [
  {
    title: "Pink Venom",
    description:
      "This that pink venom this that pink venom taste that pink venom ",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg",
  },
  {
    title: "Vampire",
    description:
      "Bloodsucker, Famefucker bleedin' me dry, like a goddamn vampire",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png",
  },
  {
    title: "A Lovely Night",
    description:
      "Some other girl and guy would love the swirling sky but there's only you and I ",
    srcImg: "https://i.ibb.co/yycnHjj/lala-land.jpg",
  },
  {
    title: "Pink Venom",
    description:
      "This that pink venom this that pink venom taste that pink venom ",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg",
  },
  {
    title: "Vampire",
    description:
      "Bloodsucker, Famefucker bleedin' me dry, like a goddamn vampire",
    srcImg:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Olivia_Rodrigo_-_Vampire.png",
  },
];

const LoggedInHomeComponent = () => {
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

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

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound(
        "https://res.cloudinary.com/dohee5l5t/video/upload/v1690633365/c532gjtquf4z7bs8eerx.mp3"
      );
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <>
      <div className="h-full w-full " style={{ background: `#121212` }}>
        <div className="h-9/10 w-full flex">
          {/* First div will be the left panel */}
          <div className="h-full bg-black w-1/5 flex flex-col justify-between pb-10">
            <div>
              {/* This one for logo */}
              <div className="logoDiv p-6">
                <img src={spotify_logo} alt="spotify logo" width={125} />
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
                <IconText
                  iconName="ic:baseline-library-music"
                  displayText="My Music"
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
            <div className="content p-8 pt-0 overflow-auto">
              <PlaylistView titleText="Songs" cardsData={Songs} />
              <PlaylistView titleText="Study" cardsData={Songs} />
              <PlaylistView titleText="Pop" cardsData={Songs} />
            </div>
          </div>
        </div>
        {/* below div is for current playing song */}
        <div className="h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4">
          <div className="w-1/4 flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/c/cb/Pink_Venom_Cover.jpg"
              alt="currentSongThumbnail"
              className="h-14 w-14 rounded"
            />
            <div className="pl-4">
              <div className="text-sm hover:underline cursor-pointer">
                Pink Venom
              </div>
              <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                Black Pink
              </div>
            </div>
          </div>
          <div className="w-2/4 h-full flex justify-center flex-col items-center">
            <div className="flex w-1/3 justify-between items-center">
              {/* controls for the player! */}
              <Icon
                icon="ph:shuffle-fill"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
              <Icon
                icon="mdi:skip-previous-outline"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
              <Icon
                icon={
                  isPaused
                    ? "ic:baseline-play-circle"
                    : "ic:baseline-pause-circle"
                }
                fontSize={50}
                className="cursor-pointer text-gray-400 hover:text-white"
                onClick={togglePlayPause}
              />
              <Icon
                icon="mdi:skip-next-outline"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
              <Icon
                icon="ic:twotone-repeat"
                fontSize={30}
                className="cursor-pointer text-gray-400 hover:text-white"
              />
            </div>
            {/* <div>progress bar</div> */}
          </div>
          <div className="w-1/4 flex justify-end">right part</div>
        </div>
      </div>
    </>
  );
};

export default LoggedInHomeComponent;
