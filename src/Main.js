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
                <Body spotify={ spotify }/>
            </div>
            
            <Player />
        </div>
    )
}

export default Main
