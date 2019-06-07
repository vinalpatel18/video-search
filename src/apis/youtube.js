import axios from 'axios'

const KEY = "AIzaSyBJeuV6WNEsNfxbu5_-SRZuHq1pPYIXMHI"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY,
        q: 'surfing'
    }
});
