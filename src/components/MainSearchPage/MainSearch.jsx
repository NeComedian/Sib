import s from ".//MainSearch.module.css";
import {Input} from "../FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {useNavigate} from "react-router-dom";
import {RequireAuth} from "../../hoc/AuthRedirect";
import {useDispatch} from "react-redux";
import {loadVideosThunk} from "../../redux/result-reducer";

const MainSearchPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(loadVideosThunk(formData.mainSearch));
        navigate('/search');
    }
    return (
        <div className={`container ${s.mainSearchContainer}`}>
            <h1>Поиск видео</h1>
            <ReduxSearchPanel onSubmit={onSubmit}/>
        </div>
    )
}

const MainSearchPanel = (props) => {
    return (
        <form className={s.searchForm} onSubmit={props.handleSubmit}>
            <Field component={Input} placeholder={'Что хотите посмотреть?'} name={'mainSearch'} type={'search'}/>
            <button className={'mainButton'} type={"submit"}>Найти</button>
        </form>
    )
}
const ReduxSearchPanel = reduxForm({form:"mainSearch"})(MainSearchPanel)
export default RequireAuth(MainSearchPage);