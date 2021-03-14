import React from 'react';
import './Styles/Sidebar.scss';
import Spotify_White from './Images/Spotify_White.png';
import SidebarList from './SidebarList';

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src={Spotify_White} alt="logo" />
            <SidebarList Icon={HomeIcon} title="Home" />
            <SidebarList Icon={SearchIcon} title="Search" />
            <SidebarList Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebarTitle" >PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarList title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
