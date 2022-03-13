import { useLocation, Navigate } from "react-router-dom";
import {connect} from "react-redux";
let mapStateToPropsRedirect = (state) => ({isLogged: state.auth.isLogged});
export function RequireAuth(Component) {
        const RequireAuthComponent = (props) => {
            const location = useLocation();
            if (!props.isLogged) {
                return <Navigate to="/login" state={{from: location}} replace/>;
            } else {
                return <Component {...props}/>;
            }
        }
        const ConnectedRequireAuthComponent = connect(mapStateToPropsRedirect)(RequireAuthComponent);
        return ConnectedRequireAuthComponent;
}