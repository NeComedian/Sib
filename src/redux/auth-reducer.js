import {login} from "../services/usersService";
import {stopSubmit} from "redux-form";
import {deleteLocalToken, setLocalToken} from "../services/favouritesService";

const AUTH = 'auth/auth';
const LOGOUT = "auth/log-out";
const SET_TOKEN = "auth/set-token";
let initialState = {
    isLogged: false,
    token: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                isLogged: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export const auth = () => ({type: AUTH})
export const logOut = () => ({type: LOGOUT})
export const setToken = (token) => ({type: SET_TOKEN, token: token})


export const loginThunk = (email, password) => (dispatch) => {
    const response = login(email, password);
    if(response[0]){
        dispatch(auth());
        dispatch(setToken(response[1]));
        setLocalToken(response[1]);
        debugger
    }
    else (dispatch(stopSubmit("login",{_error:response[1]})));
}

export const logOutThunk = () => (dispatch) =>{
    deleteLocalToken();
    dispatch(logOut());
}