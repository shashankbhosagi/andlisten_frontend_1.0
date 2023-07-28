import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaylistView from "../components/shared/PlayListView";
import TextWithHover from "../components/shared/TextWithHover";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTResuest } from "../utils/serverHelpers";

const UploadSongComponent = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");
  const navigate = useNavigate();
  const submitSong = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTResuest("/song/create", data);
    if (response.err) {
      alert("could not create a song");
      return;
    }
    alert("Success!!");
    navigate("/home");
  };

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
            <div className="text-2xl font-semibold mb-5 text-white mt-8">
              Upload Your Music
            </div>
            <div className="w-2/3 flex space-x-3">
              <div className="w-1/2">
                <TextInput
                  label="Song Name"
                  labelClassName={"text-white"}
                  placeholder={"Song Name"}
                  value={name}
                  setValue={setName}
                />
              </div>
              <div className="w-1/2">
                <TextInput
                  label="Thumbnail"
                  labelClassName={"text-white"}
                  placeholder={"Thumbnail"}
                  value={thumbnail}
                  setValue={setThumbnail}
                />
              </div>
            </div>
            <div className="py-5">
              {uploadedSongFileName ? (
                <div className="bg-white rounded-full p-3 w-1/3">
                  {uploadedSongFileName.substring(0, 30)}...
                </div>
              ) : (
                <CloudinaryUpload
                  setUrl={setPlaylistUrl}
                  setName={setUploadedSongFileName}
                />
              )}
            </div>
            <div
              className="bg-white w-40 flex items-center justify-center p-4 rounded-full font-semibold cursor-pointer"
              onClick={submitSong}
            >
              Submit Song
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadSongComponent;
