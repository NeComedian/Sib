import s from "./ResultCard.module.css";

export const ResultGridItem = (props) => {
    const {snippet} = props.video;
    return (
        <div className={s.resultGrid}>
            <div className={s.videoImage} style={{backgroundImage: `url(${snippet.thumbnails.medium.url})`} }/>
            <div className={s.descr}>
                <h3 className={s.resultTitle}>{snippet.title}</h3>
                <div className={s.info}>
                    <p>{snippet.channelTitle}</p>
                    <p>786 тыс. просмотров</p>
                </div>
            </div>
        </div>
    )
}

export const ResultListItem = (props) => {
    const {snippet} = props.video;
    return (
        <div className={s.resultList}>
            <div className={s.videoImage}  style={{backgroundImage: `url(${snippet.thumbnails.medium.url})`} }/>
        <div className={s.descr}>
            <h3 className={s.resultTitle}>{snippet.title}</h3>
            <div className={s.info}>
                <p>{snippet.channelTitle}</p>
                <p>786 тыс. просмотров</p>
            </div>
        </div>
        </div>
    )
}
