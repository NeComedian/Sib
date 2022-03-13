import s from "./ResultSearch.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectSearchTitle} from "../../../redux/result-selectors";
import {loadVideosThunk} from "../../../redux/result-reducer";
import { initialize } from 'redux-form';
import {Modal} from "../../Modal/Modal";

const ResultSearch = () => {
    const [isModal, setModal] = React.useState(false);
    const dispatch = useDispatch();
    const searchTitle = useSelector(selectSearchTitle);
    useEffect(() => {
        dispatch(initialize("ResultSearch",{'resultSearch': searchTitle}));
    },[searchTitle]);
    const onClose = () => setModal(false);
    const onSubmit = (formData) => {
        dispatch(loadVideosThunk(formData.resultSearch));
    }
    return (
        <div className={`container ${s.resultSearchContainer}`}>
            <Modal
                visible={isModal}
                onClose={onClose}
            />
            <h1>Поиск видео</h1>
            <ReduxSearchPanel onSubmit={onSubmit} toggleVisible={() =>  setModal(true)} resultTitle/>
        </div>
    )
}

const ResultSearchPanel = (props) => {
    return (
        <form className={s.searchForm} onSubmit={props.handleSubmit}>
            <Field component={Input} placeholder={'Что хотите посмотреть?'} name={'resultSearch'} type={'search'}/>
            <button className={s.favButton} type={"button"} onClick={props.toggleVisible}><i className={"fa fa-regular fa-heart"}/></button>
            <button className={'mainButton'} type={"submit"}>Найти</button>
        </form>
    )
}

const ReduxSearchPanel = reduxForm({form:"ResultSearch"})(ResultSearchPanel);
export default ResultSearch;