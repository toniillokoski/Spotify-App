import React from 'react';
import './Styles/Login.scss';

import Spotify_Green from './Images/Spotify_Green.png';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img src={Spotify_Green} alt="Green" />
            <button><a href={loginUrl}>Login with Spotify</a></button>
        </div>
    )
}

export default Login;