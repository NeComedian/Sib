import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {useDispatch, useSelector} from "react-redux";
import {required} from "../utils/validators";
import s from './Login.module.css';
import Logo from "../common/Logo/Logo";
import {loginThunk} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {selectIsLogged} from "../../redux/auth-selectors";

export const LoginPage = ( )=> {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(loginThunk(formData.login, formData.password));
    }
    if(isLogged) return <Navigate to="/" replace/>
    return(
        <div className={s.loginContainer}>
            <Logo/>
            <h1>Вход</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage;

const LoginForm = (props) => {
    const {handleSubmit, error} = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login">Логин</label>
            <Field component={Input} placeholder={'LoginPage'} name={'login'} validate={[required]}/>
            <label htmlFor="password">Пароль</label>
            <Field component={Input}  type={'password'} placeholder={'Password'} validate={[required]}
                   name={'password'}/>
            {error?<div>{error}</div>:null}
            <button className={"mainButton " + s.loginButton}>Войти</button>
        </form>
    )
}
export const ReduxLoginForm = reduxForm({form:"login"})(LoginForm)

