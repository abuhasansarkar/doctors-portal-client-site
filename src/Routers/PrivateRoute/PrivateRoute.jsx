import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contents/AuthProvider';
import Loading from '../../conponents/Loading';

const PrivateRoute = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     const location = useLocation();
     if(loading){
          return <Loading></Loading>
     }
     if(user){
          return children;
     }
     
     return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    
};

export default PrivateRoute;