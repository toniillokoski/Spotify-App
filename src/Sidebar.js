import React from 'react';
import './Styles/Sidebar.scss';
import Spotify_White from './Images/Spotify_White.png';
import SidebarList from './SidebarList';

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


function Sidebar() {
    return (
        <div className="sidebar">
            <img src={Spotify_White} alt="logo" />
            <SidebarList Icon={HomeIcon} title="Home" />
            <SidebarList Icon={SearchIcon} title="Search" />
            <SidebarList Icon={LibraryMusicIcon} title="Your Library" />
        </div>
    )
}

export default Sidebar
