import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);
    if(loader){
        return <Loader></Loader>
    }

    if(user){
        return children
    }


    return  <Navigate to='/login' state={{from:location}} replace></Navigate>;

};

export default PrivateRoute;