import axios from 'axios';

export const uploadImage = (image, CLOUDINARY_API, CLOUDINARY_PRESET) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', CLOUDINARY_PRESET);

    return axios.post(CLOUDINARY_API, formData);
};
