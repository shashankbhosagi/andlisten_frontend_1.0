import { cloudinary_cloud_name, cloudinary_upload_preset } from "../../config";
import { openUploadWidget } from "../../utils/CloudinaryService";

const CloudinaryUpload = ({ setUrl, setName }) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudinary_cloud_name,
        uploadPreset: cloudinary_upload_preset,
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
          console.log(result.info);
        } else if (error) {
          alert("Could not upload");
          console.log(error);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button
      className="bg-white text-black rounded-full p-4 font-semibold"
      onClick={uploadImageWidget}
    >
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
