import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    headers: { 'Content-Type': 'application/json' },
});

export const getVideos = (q, maxResults) =>{
    return instance.get(`search?&part=snippet&maxResults=${maxResults}&q=${q}&key=AIzaSyDkDoIfz3C023gkZOYF1i6-WI_9neLshcM`)
        .then(response => response.data);
}