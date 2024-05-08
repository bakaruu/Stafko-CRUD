"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_uploader_port_1 = require("../../domain/ports/image-uploader.port");
const cloudinary_1 = require("cloudinary");
class CloudinaryImageUploader extends image_uploader_port_1.default {
    constructor() {
        super();
        cloudinary_1.v2.config({
            cloud_name: 'dqwqulk5l',
            api_key: '884741773216214',
            api_secret: '88bmHhF_a66VGAMB7lrBg_IeEGA'
        });
    }
    async upload(imagePath) {
        try {
            const result = await cloudinary_1.v2.uploader.upload(imagePath);
            return result.url;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = CloudinaryImageUploader;
//# sourceMappingURL=cloudinary-image-uploader.adapter.js.map