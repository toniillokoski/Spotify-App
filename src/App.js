import React, { useEffect, useState } from "react";
import './Styles/App.scss';
import SpotifyWebApi from "spotify-web-api-js";

import { getToken } from "./spotify";
import Login from "./Login";
import Main from "./Main";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      })
    }
  }, []);

  return (

    <div className="App">
      { token ? (<Main />) : (<Login />) }
    </div>

  );
}

export default App;