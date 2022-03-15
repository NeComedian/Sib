import s from "./FavouritesItem.module.css";
import {useState} from "react";

export const FavouritesItem = (props) => {
    const [visible, setVisible] = useState(false);
    const {queryTitle, onDelete, onExecute, onEdit} = props;
    const actionClass = visible?(s.favouritesItemActions + " "  + s.visible):s.favouritesItemActions;
    return (
        <div>
            <h2 className={s.favouritesItem} onClick={() => setVisible(!visible)}>{queryTitle}</h2>
                <div className={actionClass}>
                    <span onClick={onExecute}>Выполнить</span>
                    <span onClick={onEdit}>Редактировать</span>
                    <span onClick={onDelete}>Удалить</span>
                </div>
        </div>
    )
}

