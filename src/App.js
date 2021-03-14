import React, { useEffect } from "react";
import './Styles/App.scss';
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "./spotify";
import Login from "./Login";
import Main from "./Main";
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  }, );


  return (

    //If theres a token from login, show Main, otherwise show login
    <div className="App">
      { token ? (<Main spotify={spotify}/>) : (<Login />) }
    </div>

  );
}

export default App;