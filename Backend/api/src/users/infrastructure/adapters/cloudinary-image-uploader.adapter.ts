
import ImageUploader from '../../domain/ports/image-uploader.port';
import { v2 as cloudinary } from 'cloudinary';

class CloudinaryImageUploader extends ImageUploader {
  constructor() {
    super();
    // Configura Cloudinary con tus credenciales
    cloudinary.config({
      cloud_name: 'dqwqulk5l',
      api_key: '884741773216214',
      api_secret: '88bmHhF_a66VGAMB7lrBg_IeEGA'
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