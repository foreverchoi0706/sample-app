import axios from 'axios';

const KEY = '20015009-76eb2c552652346c9f11fb3cf';

const IMAGES = 'https://pixabay.com/api/';

const VIDEOS = 'https://pixabay.com/api/videos/';

const api = {
  async getImages() {
    const {data} = await axios.get(IMAGES, {
      params: {
        key: KEY,
      },
    });
    return data;
  },

  async searchImages(q) {
    const {data} = await axios.get(IMAGES, {
      params: {
        key: KEY,
        q,
      },
    });
    return data;
  },
};

export default api;
