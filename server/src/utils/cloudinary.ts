import { v2 }  from "cloudinary";

export const cloudinaryConfig = async () => {
  try {
    v2.config({
      cloud_name: process.env.CLOUDNAME,
      api_key: process.env.APIKEY,
      api_secret: process.env.APISECRET,
    });

    console.log("Cloudinary config connected");
  } catch (error) {
    console.log("Cloudinary config interrupted");
  }
};




// export const uploadToCloudinary = (path: any, folder: any) => {
//   return v2.uploader
//     .upload(path, { folder })
//     .then((data: any) => {
//       return { url: data.url, public_id: data.public_id };
//     })
//     .catch((error: any) => {
//       console.log(error);
//     });
// };

// export const removeFromCloudinary = async (public_id: string) => {
//   await v2.uploader.destroy(public_id, function (error: any, result: any) {
//     console.log(result, error);
//   });
// };
