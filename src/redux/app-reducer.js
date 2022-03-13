import {auth} from "./auth-reducer";
import {isValidToken} from "../services/usersService";
import {getLocalToken} from "../services/favouritesService";

const SET_INITIALISING = 'app/set-initialise-status'

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_INITIALISING:
            return {
                ...state,
                initialized: true,
            }
        default:
            return {
                ...state,
            }
    }
}
export const SetInitialising = () => ({type: SET_INITIALISING})
export const SetInitialisingThunk = () => (dispatch) =>{
    const localToken = getLocalToken();
    if(isValidToken(localToken)){
        dispatch(auth());
    }
    dispatch(SetInitialising());
}