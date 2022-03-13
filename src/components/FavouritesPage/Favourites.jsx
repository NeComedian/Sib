import s from "./Favourites.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectQueries} from "../../redux/favourites-selector";
import {FavouritesItem} from "./FavouritesItem/FavouritesItem";
import {deleteQuery, setEditingId} from "../../redux/favourites-reducer";
import {loadVideosThunk} from "../../redux/result-reducer";
import {useNavigate} from "react-router-dom";
import {RequireAuth} from "../../hoc/AuthRedirect";
import React from "react";
import {Modal} from "../Modal/Modal";

const FavouritesPage = () => {
    const [isModal, setModal] = React.useState(false);
    const queries = useSelector(selectQueries);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClose = () => setModal(false);
    const onDelete = (id) => {
        dispatch(deleteQuery(id));
    }
    const onEdit = (id) => {
        setModal(true);
        dispatch(setEditingId(id));
    }
    const onExecute = (q, maxResult) => {
        dispatch(loadVideosThunk(q, maxResult));
        navigate('/search');
    }
    debugger
    const queryElements = queries.map(query => {
        return (
            <FavouritesItem key={query.id} queryTitle={query.title}
                            onEdit={() => onEdit(query.id)}
                            onDelete={() => onDelete(query.id)}
                            onExecute={() => onExecute(query.query, query.maxResults)}/>
        )
    })
    return (
        <div className={`container ${s.favouritesContainer}`}>
            <h1>Избранное</h1>
            <Modal
                visible={isModal}
                onClose={onClose}
                type={'edit'}
            />
            <div className={s.favouritesItems}>
                {queryElements}
            </div>
        </div>
    )
}
export default RequireAuth(FavouritesPage);