import './App.css';
import React, {Suspense, lazy} from 'react';
import ResultPage from "./components/ResultPage/ResultPage";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import MainSearchPage from "./components/MainSearchPage/MainSearch";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLogged} from "./redux/auth-selectors";
import {useEffect} from "react";
import {SetInitialisingThunk} from "./redux/app-reducer";
import {selectInitialized} from "./redux/app-selectors";

const LoginPage = lazy(() => import('./components/LoginPage/Login'));
const FavouritesPage = lazy(() => import("./components/FavouritesPage/Favourites"));

export default function App() {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    const initialized = useSelector(selectInitialized)

    useEffect(() => {
        dispatch(SetInitialisingThunk());
    }, [dispatch])

    if (!initialized) return (<div>...loading</div>)
    return (
        <div className="App">
            {isLogged ? <Header/> : null}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainSearchPage/>}/>
                    <Route path="/search" element={<ResultPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}
