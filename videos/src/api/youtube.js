import axios from 'axios';

const KEY = 'AIzaSyBLDK_CubLvziCHOhjS4ZyBD7tyqo6rCo0';
// GET https://www.googleapis.com/youtube/v3/search

// I downgraded axios to 0.18.1 as there was unfix
// bug in 0.19.1 which didn't properly merge parameters from
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
