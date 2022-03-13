import React, {useEffect} from 'react'
import s from "./Modal.module.css";
import {Field, initialize, reduxForm} from "redux-form";
import {Input, Select} from "../FormsControls/FormsControls";
import {required} from "../utils/validators";
import {useDispatch, useSelector} from "react-redux";
import {addQuery, editQuery} from "../../redux/favourites-reducer";
import {selectResultSearchValue} from "../../redux/form-selector";
import {selectEditingId, selectQueryById} from "../../redux/favourites-selector";

export const Modal = (props) => {
    const {onClose, type} = props;
    const dispatch = useDispatch();
    const queryValue = useSelector(selectResultSearchValue);
    const id = useSelector(selectEditingId);
    const query = useSelector(selectQueryById(id));
    useEffect(() => {
        dispatch(initialize("favourites", initialiseValues));
    });
    let onSubmit = (formData) => {
        dispatch(addQuery({
            query: formData.query,
            title: formData.title,
            maxResults: formData.count,
            id: 4
        }));
        onClose();
    }
    let initialiseValues = {
        'query': queryValue,
        'order': "",
        'count': "12",
    };
    let rangeInitial = 12;
    if (type == "edit") {
        initialiseValues = {
            'query': query.query,
            'order': "",
            'count': query.maxResults,
            'title': query.title
        }
        rangeInitial = query.maxResults;
        onSubmit = (formData) => {
            dispatch(editQuery({
                query: formData.query,
                title: formData.title,
                maxResults: formData.count,
                id: id
            }));
            onClose();
        }
    }
return (
    <div className={s.modal} onClick={onClose}>
        <div className={s.modalDialog} onClick={e => e.stopPropagation()}>
            <h2>{type?"Редактировать запрос":"Сохранить запрос"}</h2>
            <ReduxFavouritesForm type={type} rangeInitial={rangeInitial} onClose={onClose} onSubmit={onSubmit}/>
        </div>
    </div>
)
}

const favouritesForm = (props) => {
    const {type,rangeInitial, handleSubmit, error, onClose} = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="query">Запрос</label>
            <Field className={s.modalDialogInput} component={Input} placeholder={'Query'} name={'query'}/>
            <label htmlFor="title">Название</label>
            <Field className={s.modalDialogInput} component={Input} placeholder={'Title'} validate={[required]}
                   name={'title'}/>
            <label htmlFor="order">Сортировать по</label>
            <Field className={s.modalDialogInput} component={Select}>} name={'order'}>
                <option value="">Без сортировки</option>
                <option value="00ff00">Количество просмотров</option>
                <option value="0000ff">Дата выхода</option>
            </Field>
            <label htmlFor="order">Запрос</label>
            <div className={s.modalDialogRange}>
                <Field style={{"--value": rangeInitial, '--min': "1", '--max': "100"}} min={"1"}
                       component={Input} type={'range'}
                       className="styled-slider slider-progress" name={'count'}
                       onInput={(event =>
                           event.target.style.setProperty('--value', event.target.value))}/>
                <Field className={s.modalDialogInput} type={'text'} disabled component={Input} name={'count'}/>
            </div>
            {error ? <div>{error}</div> : null}
            <button className={"mainButton"} onClick={onClose} type={'button'}>
                {type?"Не редактировать":"Не сохранять"}
            </button>
            <button className={"mainButton"} type={"submit"}>
                {type?"Редактировать":"Сохранить"}
            </button>
        </form>
    )
}

export const ReduxFavouritesForm = reduxForm({form: "favourites"})(favouritesForm)
