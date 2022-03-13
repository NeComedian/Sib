import './App.css';
import ResultPage from "./components/ResultPage/ResultPage";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./components/LoginPage/Login";
import Header from "./components/Header/Header";
import MainSearchPage from "./components/MainSearchPage/MainSearch";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLogged} from "./redux/auth-selectors";
import {useEffect} from "react";
import {SetInitialisingThunk} from "./redux/app-reducer";
import {selectInitialized} from "./redux/app-selectors";
import FavouritesPage from "./components/FavouritesPage/Favourites";
import {ModalPage} from "./components/Modal/Modal";

export default function App() {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    const initialized = useSelector(selectInitialized)

    useEffect(() => {
        dispatch(SetInitialisingThunk());
    }, [dispatch])

    if(!initialized) return (<div>...loading</div>)
    return (
        <div className="App">
            {isLogged ? <Header/> : null}
            <Routes>
                <Route path="/" element={<MainSearchPage/>}/>
                <Route path="/search" element={<ResultPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/favourites" element={<FavouritesPage/>}/>
            </Routes>
        </div>
    );
}
