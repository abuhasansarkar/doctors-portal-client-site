import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/UseAdminHooks/useAdmin';
import { AuthContext } from '../../contents/AuthProvider';
import Loading from '../../conponents/Loading';
import { useContext } from 'react';

const AdminRoute = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     const [isAdmin, isAdminLoading] = useAdmin(user?.email)
     const location = useLocation();
     if(loading || isAdminLoading){
          return <Loading></Loading>
     }
     if(user && isAdmin){
          return children;
     }
     
     return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    
};

export default AdminRoute;