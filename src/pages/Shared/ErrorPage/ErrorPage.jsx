import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contents/AuthProvider';

const ErrorPage = () => {
     const {userLogout} = useContext(AuthContext);
     const error = useRouteError();
     const hendelLogout = () => {
          userLogout()
            .then(() => {
              toast.error("Successfully Logout");
            })
            .catch((error) => {
              console.log(error);
            });
        };
     return (
          <div className='text-center w-1/2 m-auto'>
               <h1 className='text-9xl'>Oops!</h1>
               <h2 className='text-red-600 text-3xl mt-5'>Something is wrong</h2>
               <p className="text-xl">{error.statusText || error.message}</p>

               <p className="text-2xl">Please <button onClick={hendelLogout}>Logout Now</button></p>
          </div>
     );
};

export default ErrorPage;