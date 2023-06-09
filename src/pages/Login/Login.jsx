import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contents/AuthProvider";
import Loading from "../../conponents/Loading";
import useJwtToken from "../../Hooks/UseTokenHooks/useJwtToken";

const Login = () => {
  const {userLogin, googleSingin, loading} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState();
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [jwtToken] = useJwtToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if(jwtToken){
    navigate(from, { replace: true });
  }

  const hendelLogin = (e) =>{
    e.preventDefault();
    // console.log(e.target.email);
    const form = e.target;
    const email =form.email.value;
    const password =form.password.value;
    // console.log(email, password);
    userLogin(email, password)
    .then((result) => {
         const user = result.user;
         if(user?.uid){
              toast.success('Successfully Login Your Account')
         }
         setLoginUserEmail(email);
         form.reset();
         
       })
       .catch((error) => {
         const errorMessage = error.message;
         setErrorMessage(errorMessage);
         
       });
  }

  // Send password reset email 
  const hendelResetPassword = (email) => {
    console.log('Clicked');
    // resetPassword(email)
    // .then(() => {
    //   console.log("Send reset password email");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  // Google Singin

  const hendelGoogleSingin = () => {
    googleSingin()
    .then(result => {
         const user = result.user;
         console.log(user);
         if(result.uid){
              toast.success('Successfully Login..');
         }
         navigate(from, { replace: true });
    })
    .catch((error) => {
         const errorMessage = error.message;
         setErrorMessage(errorMessage);
       });
}

if(loading){
  return <Loading></Loading>
}

  return (
    <div className="lg:w-2/5 m-auto">
      <div className="border-4 rounded-xl p-10 m-20">
        <h2 className="text-5xl text-center mb-5">LogIn</h2>
        <form onSubmit={hendelLogin}>
          <p className="text-red-500">{errorMessage}</p>
          <input
            type="text"
            placeholder="Type Your Email"
            className="input input-bordered input-accent w-full mb-5"
            name="email"
          />
          <input
            type="password"
            placeholder="Type your strong Password"
            className="input input-bordered input-accent w-full"
            name="password"
          />
          <p>
            <Link onClick={hendelResetPassword} className="text-cyan-400" to="/">Forget Your Password</Link>
          </p>
          <button className="btn w-full mt-3">LogIn Now</button>
        </form>

          <h5 className="mt-3">You have Doctor Portal <Link to='/register' className="text-cyan-500 font-bold"> Register New Account</Link></h5>

        <div className="divider">OR</div>
        <button onClick={hendelGoogleSingin} className="btn btn-outline btn-success w-full">Continue Google SingIn</button>
      </div>
    </div>
  );
};

export default Login;
