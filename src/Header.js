import React from 'react';
import './Styles/Header.scss';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}] = useDataLayerValue();

    return (
        <div className="header">

            <div className="header_left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs or Podcast" />
            </div>

            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="profilepic" />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header
