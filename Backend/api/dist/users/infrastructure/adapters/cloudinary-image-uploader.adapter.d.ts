import ImageUploader from '../../domain/ports/image-uploader.port';
declare class CloudinaryImageUploader extends ImageUploader {
    constructor();
    upload(imagePath: string): Promise<string>;
}
export default CloudinaryImageUploader;
