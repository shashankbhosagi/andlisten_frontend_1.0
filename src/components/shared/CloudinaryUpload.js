import { cloudinary_cloud_name, cloudinary_upload_preset } from "../../config";
import { openUploadWidget } from "../../utils/CloudinaryService";

const CloudinaryUpload = () => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: cloudinary_cloud_name,
        uploadPreset: cloudinary_upload_preset,
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
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
      Upload Song
    </button>
  );
};

export default CloudinaryUpload;
