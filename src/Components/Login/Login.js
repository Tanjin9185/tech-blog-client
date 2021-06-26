import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { SignInUserWithEmailAndPassword, initializeLogIn as initializeLogIn, } from './LoginManager';
import { UserContext } from '../../App';

const Login = () => {
    initializeLogIn();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignIn: false,
        email: '',
        password: '',
        error: '',
        success: false
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res)
        if (redirect) {
            history.replace(from);
        }
    }



    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }

    const handleSubmit = (event) => {

        //   if ( user.email && user.password)
        //   {
        SignInUserWithEmailAndPassword(user.email, user.password)
            .then(res => {

                handleResponse(res, true);
                setLoggedInUser(res);

            })
            .catch(err =>
                console.log(err))
        //   }
        console.log("clicked");
        event.preventDefault();
    }



    const handleBlur = (event) => {

        const newUserInfo = { ...user };
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);

    }

    return (
        <div className="font-sans my-8">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Login
                        </label>
                        <form onSubmit={handleSubmit} method="#" action="#" className="mt-10">

                            <div className="mt-7">
                                <input type="email" onBlur={handleBlur} name="email" placeholder="type email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>
                            <div className="mt-7">
                                <input type="password" onBlur={handleBlur} name="password" placeholder="password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                            </div>

                            <div className="mt-7">
                                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>
                            <div className="flex mt-7 items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    Login on
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>
                            <div className="flex mt-7 justify-center w-full">
                                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Facebook
                                </button>
                                <button type="submit" className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Google
                                </button>
                            </div>

                        </form>
                        <p >{user.error}</p>
                        {
                            user.success && <p style={{ color: 'green' }}>User Logged In successfully</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;