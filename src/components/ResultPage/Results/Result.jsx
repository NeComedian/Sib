import s from "./Result.module.css";
import {ResultListItem, ResultGridItem} from "./ResultCard/ResultCard";
import {GridIcon, ListIcon} from "../../common/Icons/Icons";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectResultsCount, selectSearchTitle, selectVideos} from "../../../redux/result-selectors";


const Result = () => {
    const [view, setView] = useState(false);
    const videos = useSelector(selectVideos);
    const searchTitle = useSelector(selectSearchTitle);
    const resultsCount = useSelector(selectResultsCount);

    const videoElements = videos.map(video =>{
        return(
            view? <ResultListItem key={video.id.videoId} video={video}/>:
                <ResultGridItem key={video.id.videoId} video={video}/>
        )
    })

    return (
        <div className={`container ${s.resultContainer}`}>
            <div className={s.resultFilter}>
                <h2>Видео по запросу
                    <span className={s.searchText}> "{searchTitle}"</span>
                    <span className={s.resultNumber}>{resultsCount}</span>
                </h2>
                <button className={!view?s.active:""} onClick={() => setView(true)}><ListIcon view/></button>
                <button className={view?s.active:""} onClick={() => setView(false)}><GridIcon view/></button>
            </div>
            <div className={view? s.resultList:s.resultGrid}>
                {videoElements}
            </div>
        </div>
    )
}

export default Result;