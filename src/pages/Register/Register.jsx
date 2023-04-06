import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contents/AuthProvider";
import Loading from "../../conponents/Loading";

const Register = () => {
  const { userRegister, googleSingin, updateUser, loading } =
    useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const hendelRegister = (e) => {
    e.preventDefault();
    // console.log(e.target.email);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          toast.success("Your Account Successfully Created");
        }
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            userData(name, email);
          })
          .catch((err) => console.log(err));
        // console.log(user);
        form.reset();
        
      })
      /* .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      }) */
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  // Register user information send Database

  const userData = (name, email) => {
    const user = {
      email,
      name
    }
    fetch('http://localhost:5000/usersData', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      navigate("/");
    })
  }

  // Google Singin

  const hendelGoogleSingin = () => {
    googleSingin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (result.uid) {
          toast.success("Successfully Login..");
        }
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };
  // Loading
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-2/5 m-auto">
      <div className="border-4 rounded-xl p-10 m-20">
        <h2 className="text-5xl text-center mb-5">Register Now</h2>
        <form onSubmit={hendelRegister}>
          <p className="text-red-500">{errorMessage}</p>
          <input
            type="text"
            placeholder="Type Your Name"
            className="input input-bordered input-accent w-full mb-5"
            name="name"
          />
          <input
            type="email"
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

          <button className="btn w-full mt-3">Register Now</button>
        </form>

        <h5>
          New to Doctor Portal{" "}
          <Link to="/login" className="text-cyan-500 font-bold">
            Login Your Account
          </Link>
        </h5>

        <div className="divider">OR</div>
        <button
          onClick={hendelGoogleSingin}
          className="btn btn-outline btn-success w-full"
        >
          Continue Google SingIn
        </button>
      </div>
    </div>
  );
};

export default Register;
