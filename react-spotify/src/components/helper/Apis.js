import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

const inisializeApi = (options) => {
  const headers = {
    Accept: 'application/json',
  };
  return axios.create({
    baseURL: apiUrl,
    timeout: 31000,
    headers,
  });
};

export class SongApi {
  constructor() {
    this.client = null;
  }

  getSongList = () => inisializeApi().get('/songs');

  getSongById = (id) => inisializeApi().get(`/songs/${id}`);

  addSongUser = (song) => inisializeApi().post('/songs', song);

  deleteSong = (id) => inisializeApi().delete(`/songs/${id}`);
}

export class ConfigurationsApi {
  constructor() {
    this.client = null;
  }

  getAppConfigurations = () => inisializeApi().get('/configurations');
}
