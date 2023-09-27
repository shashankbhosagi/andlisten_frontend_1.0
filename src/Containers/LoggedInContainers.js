import { useContext, useRef, useState, useLayoutEffect } from "react";
import { Howl, Howler } from "howler";
import TextWithHover from "../components/shared/TextWithHover";
import { Icon } from "@iconify/react";
import andlisten_logo_black from "../assets/images/logo_with_name_black.png";
import IconText from "../components/shared/IconText";
import songContext from "../context/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";

const LoggedInContainers = ({ children, currentActiveScreen }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    //THe following if is to prevent the uselayouteffect from running after switching the window
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };
  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);

    sound.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound(currentSong.track);
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <>
      <div className="h-full w-full " style={{ background: `#121212` }}>
        {createPlaylistModalOpen && (
          <CreatePlaylistModal
            closeModal={() => {
              setCreatePlaylistModalOpen(false);
            }}
          />
        )}
        <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
          {/* First div will be the left panel */}
          <div className="h-full bg-black w-1/5 flex flex-col justify-between pb-10">
            <div>
              {/* This one for logo */}
              <div className="logoDiv p-6">
                <img
                  src={andlisten_logo_black}
                  alt="andlisten logo"
                  width={175}
                />
              </div>
              <div className="py-5">
                <IconText
                  iconName="material-symbols:home"
                  displayText="Home"
                  active={currentActiveScreen === "home"}
                  targetLink="/home"
                />
                <IconText
                  iconName="material-symbols:search-rounded"
                  displayText="Search"
                  targetLink="/search"
                  active={currentActiveScreen === "search"}
                />
                <IconText
                  iconName="fluent:library-28-regular"
                  displayText="Library"
                  active={currentActiveScreen === "library"}
                />
                <IconText
                  iconName="ic:baseline-library-music"
                  displayText="My Music"
                  targetLink="/myMusic"
                  active={currentActiveScreen === "myMusic"}
                />
              </div>
              <div className="pt-5">
                <IconText
                  iconName="icon-park-outline:add"
                  displayText="Create Playlist"
                  onClick={() => {
                    setCreatePlaylistModalOpen(true);
                  }}
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
                  <TextWithHover
                    displayText="Upload Song"
                    targetLink="/uploadsong"
                  />
                  <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                    SK
                  </div>
                </div>
              </div>
            </div>
            <div className="content p-8 pt-0 overflow-auto">{children}</div>
          </div>
        </div>
        {/* below div is for current playing song */}
        {currentSong && (
          <div className="h-1/10 w-full bg-black bg-opacity-30 text-white flex items-center px-4">
            <div className="w-1/4 flex items-center">
              <img
                src={currentSong.thumbnail}
                alt="currentSongThumbnail"
                className="h-14 w-14 rounded"
              />
              <div className="pl-4">
                <div className="text-sm hover:underline cursor-pointer">
                  {currentSong.name}
                </div>
                <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                  {currentSong.artist.firstName}
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
        )}
      </div>
    </>
  );
};

export default LoggedInContainers;
