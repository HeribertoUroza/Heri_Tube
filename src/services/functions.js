import axios from 'axios';
import { ytKey } from './config'

const youTubeAPI = (searchQuery) => {
    axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 8,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: ytKey.REACT_APP_API_KEY,
                q: searchQuery,
                pageToken: ''
            }
        })
        .catch(err => {
            console.log(err.toString())
        })
}

export { youTubeAPI }