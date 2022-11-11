import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {

    const {user} = useContext(AuthUserContext)


    // taking user location
    const location = useLocation();

    return (
        user? <div>
            {children}
        </div>: 
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;