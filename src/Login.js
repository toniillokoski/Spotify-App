import React from 'react';
import './Login.scss';

import Spotify_Green from './Images/Spotify_Green.png';

function Login() {
    return (
        <div className="login">
            <img src={Spotify_Green} alt="Green" />
            <button>Login with Spotify</button>
        </div>
    )
}

export default Login;