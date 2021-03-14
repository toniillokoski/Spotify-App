import React from 'react';
import Body from './Body';
import Player from './Player';
import Sidebar from './Sidebar';
import "./Styles/Main.scss";

function Main({ spotify }) {
    return (
        <div className="main">
            <div className="main_body">
                <Sidebar />
                <Body />
            </div>

            <div className="footer_player">
                <Player />
            </div>
        </div>
    )
}

export default Main
