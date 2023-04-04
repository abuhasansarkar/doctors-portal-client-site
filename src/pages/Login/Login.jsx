import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contents/AuthProvider";
import Loading from "../../conponents/Loading";

const Login = () => {
  const {userLogin, googleSingin, loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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
         if(user.uid){
              toast.success('Successfully Login Your Account')
         }
        //  console.log(user);
         form.reset();
         navigate(from, { replace: true });
         
       })
       .catch((error) => {
         const errorMessage = error.message;
         console.log(errorMessage);
         
       });
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
         navigate('/')
    })
    .catch((error) => {
         const errorMessage = error.message;
        console.log(errorMessage);
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
            <Link to="/">Forget Your Password</Link>
          </p>
          <button className="btn w-full mt-3">LogIn Now</button>
        </form>

          <h5>You have Doctor Portal <Link to='/register' className="text-cyan-500 font-bold"> Create New Account</Link></h5>

        <div className="divider">OR</div>
        <button onClick={hendelGoogleSingin} className="btn btn-outline btn-success w-full">Continue Google SingIn</button>
      </div>
    </div>
  );
};

export default Login;
