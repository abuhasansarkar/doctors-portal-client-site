import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google SingIn
  const googleSingin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Create or Registration user
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Verification
  const userVerify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser)
   
  };

  // User Password Reset and send Email
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  // Login user Account
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // UserName Update
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  //  User LogOut
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //    User Observing
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    googleSingin,
    userRegister,
    userVerify,
    resetPassword,
    userLogin,
    updateUser,
    userLogout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
