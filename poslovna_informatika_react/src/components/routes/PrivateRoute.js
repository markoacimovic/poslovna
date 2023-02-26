import TokenUtil from "../../api/jwt/TokenUtil";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children, roles}) => {
    const token = TokenUtil.getToken()
    const role = TokenUtil.getRole(token)

    if (!role) {
        return <Navigate to="/login"/>
    }

    if (!role && roles.indexOf(role) === -1) {
        return <Navigate to="/403"/>
    }

    return children
}

export default PrivateRoute
