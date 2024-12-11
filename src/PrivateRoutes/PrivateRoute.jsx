import { useContext } from "react";
import FirebaseProvider, { AuthContext } from "../Firebase/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="text-center text-5xl mt-40">
            <span className="loading loading-spinner loading-lg">Loading</span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;