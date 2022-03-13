import s from "./FavouritesItem.module.css";

export const FavouritesItem = (props) => {
    const {queryTitle, onDelete, onExecute, onEdit} = props;
    return (
        <div className={s.favouritesItem}>
            <span>{queryTitle}</span>
            <div className={s.favouritesItemActions}>
                <span onClick={onExecute}>Выполнить</span>
                <span onClick={onEdit}>Редактировать</span>
                <span onClick={onDelete}>Удалить</span>
            </div>
        </div>
    )
}