import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

const PrivateRoute = ({children}) => {
    console.log(children);
    const {user,loader} = useContext(AuthContext);
    console.log(user);

    const location = useLocation();
    if(loader){
        return <Loader></Loader>
    }

    if(user){
        return children
    }


    return  <Navigate to='/login' replace></Navigate>;

};

export default PrivateRoute;