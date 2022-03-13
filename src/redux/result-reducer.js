import {getVideos} from "../services/youtubeService";

const SET_LOAD = 'results/set-loading';
const SET_VIDEOS = 'results/set-videos';
const SET_TITLE = 'results/set-search-title';

let initialState = {
    videos:[],
    currentPage:1,
    loading: false,
    searchTitle: "",
    resultsCount: 0,
}

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOAD:
            return {...state, loading: !state.loading}
        case SET_VIDEOS:
            return {...state,videos: [...action.videos.items], resultsCount: action.videos.pageInfo.totalResults}
        case SET_TITLE:
            return {...state, searchTitle: action.title}
        default:
            return state
    }
}

export const setLoading = ()=> ({type: SET_LOAD})
export const setSearchTitle = (title)=> ({type: SET_TITLE, title})
export const setVideos= (videos) => ({type: SET_VIDEOS, videos})
export const loadVideosThunk = (q, maxResults=12) => {
    return (dispatch) => {
        dispatch(setSearchTitle(q));
        getVideos(q, maxResults).then(data=> {dispatch(setVideos(data));console.log(data.items)});
        }
}