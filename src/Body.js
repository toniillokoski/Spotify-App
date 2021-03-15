import React from 'react';
import './Styles/Body.scss';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from './DataLayer';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {
    const [{ discover_weekly }] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_banner">
                <img src={discover_weekly?.images[0].url} alt="" className="banner_img" />
                <div className="banner_info">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="song_icon">
                    <PlayCircleFilledIcon className="playbutton" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* {LIST OF SONGS} */}
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} key={item.track.toString()}/>
                ))}
            </div>
        </div>
    )
}

export default Body
