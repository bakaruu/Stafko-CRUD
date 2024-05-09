
import ImageUploader from '../../domain/ports/image-uploader.port';
import { v2 as cloudinary } from 'cloudinary';

class CloudinaryImageUploader extends ImageUploader {
  constructor() {
    super();
    // Configura Cloudinary con tus credenciales desde variables de entorno
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
  }

  async upload(imagePath: string): Promise<string> {
    try {
      const result = await cloudinary.uploader.upload(imagePath);
      return result.url;
    } catch (error) {
      throw error;
    }
  }
}

export default CloudinaryImageUploader;