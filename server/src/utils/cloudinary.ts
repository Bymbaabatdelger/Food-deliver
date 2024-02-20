import {v2 as cloudinary} from 'cloudinary';
          
export const cloudinaryConfig = async () => {

  try {
    
    cloudinary.config({ 
      cloud_name: 'ddjcpzprt', 
      api_key: '646313681831616', 
      api_secret: 'lTJ7YmN6WpeHQoRi2Qkhzv5erws' 
    });

    console.log("Cloudinary config connected")
    
  } catch (error) {
    console.log("Cloudinary config interrupted");
  }
}