import React, { useEffect, useState } from "react";
import './Styles/App.scss';
import SpotifyWebApi from "spotify-web-api-js";

import { getToken } from "./spotify";
import Login from "./Login";
import Main from "./Main";
import { DataLayer, useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //Setting user token to state
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  //Catching usertoken from return URL, hiding it and
  //placing it to state and using it
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

    //If theres a token from login, show Main, otherwise show login
    <div className="App">
      { token ? (<Main />) : (<Login />) }
    </div>

  );
}

export default App;