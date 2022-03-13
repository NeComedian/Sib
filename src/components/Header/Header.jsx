import s from './Header.module.css';
import Logo from "../common/Logo/Logo";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOutThunk} from "../../redux/auth-reducer";

const Header = () => {
    const dispatch = useDispatch();
    const logOut = () => dispatch(logOutThunk());
    return (
        <header className={s.header}>
            <div className={`container ${s.headerContainer}`}>
                <Logo/>
                <Navbar/>
                <span className={s.logOut} onClick={logOut}>Выйти</span>
            </div>
        </header>)
}

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <NavLink  to="/"  className={({ isActive }) =>
                isActive ? `${s.active} ${s.navItem}` : s.navItem
            }>Поиск</NavLink>
            <NavLink  to="/favourites"  className={({ isActive }) =>
                isActive ? `${s.active} ${s.navItem}` : s.navItem
            }>Избранное</NavLink>
        </nav>
    )
}

export default Header;