import TextInput from "../components/shared/TextInput";

const CreatePlaylistModal = ({ closeModal }) => {
  return (
    <div
      className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center"
      // style={{ backdropFilter: "blur(10px)" }}
      onClick={closeModal}
    >
      <div
        className=" w-1/3 rounded-md p-4"
        style={{ background: "#121213" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-white mb-3 font-semibold text-lg">
          Create Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <TextInput
            label="Name"
            labelClassName={"text-white"}
            placeholder={"Playlist name"}
            // value={thumbnail}
            // setValue={setThumbnail}
          />{" "}
          <TextInput
            label="Thumbnail"
            labelClassName={"text-white"}
            placeholder={"Thumbnail"}
            // value={thumbnail}
            // setValue={setThumbnail}
          />
          <div className="bg-white w-1/3 rounded flex font-semibold justify-center  items center py-3">
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
