import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaylistView from "../components/shared/PlayListView";
import TextWithHover from "../components/shared/TextWithHover";
import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/logo_with_name_black.png";
import IconText from "../components/shared/IconText";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { makeAuthenticatedPOSTResuest } from "../utils/serverHelpers";
import LoggedInContainers from "../Containers/LoggedInContainers";

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
      <LoggedInContainers>
        <div className="h-full w-full flex">
          {/* //TODO: Remove that inline css(background) euu!!!! */}
          <div
            className="h-full w-4/5 overflow-auto"
            style={{ background: `#121212` }}
          >
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
      </LoggedInContainers>
    </>
  );
};

export default UploadSongComponent;
