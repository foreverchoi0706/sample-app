import axios from 'axios';

const KEY = '20015009-76eb2c552652346c9f11fb3cf';

const api = {
  async getImages() {
    const {data} = await axios.get('https://pixabay.com/api/', {
      params: {
        key: KEY,
      },
    });
    return data;
  },
};

export default api;
