import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import {resultReducer} from "./result-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";
import {favouritesReducer} from "./favourites-reducer";

let reducers = combineReducers({
    form: formReducer,
    resultPage:resultReducer,
    auth: authReducer,
    app: appReducer,
    favouritesPage: favouritesReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;