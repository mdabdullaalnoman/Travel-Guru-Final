import React, { useContext } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig";
import { useHistory, useLocation } from 'react-router-dom';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [hotelInfo, setHotelInfo] = useContext(UserContext);
    console.log(hotelInfo);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email: email };
                setHotelInfo(signInUser);
                history.replace(from);
            })
            .then(error => console.log(error));
    }
    return (

        <div className="loginboxlayout">
            <img src="https://1.bp.blogspot.com/-gKqA42FtA48/YABSs2BtewI/AAAAAAAAQAA/l5LBFoA-ECQbI8LLU0oIl75sgaVLduBUwCLcBGAsYHQ/s200/avatar.png" className="avenger" />
            <h1>Login Here</h1>
            <form action="">
                <p>Username</p>
                <input type="text" name="username" placeholder="Enter Username" />
                <p>Password</p>
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit" name="submit" value="Login" />
            </form>
            <div className="google-login">
                <button onClick={handleGoogleSignIn}><img className="g-icon" src="https://i.imgur.com/Sx1nRKu.png" alt="icon" />Login With Google</button>
                <p className="create-account">Didnt have an account ? <span>create account</span></p>
            </div>
        </div>

    );
};

export default Login;