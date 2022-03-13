import ResultSearch from "./ResultSearch/ResultSearch";
import Result from "./Results/Result";
import {RequireAuth} from "../../hoc/AuthRedirect";
import {Fragment} from "react";
const ResultPage = () =>{
    return(
        <Fragment>
            <ResultSearch/>
            <Result/>
        </Fragment>
    )
}

export default RequireAuth(ResultPage);