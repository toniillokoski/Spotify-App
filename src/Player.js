import React from 'react';
import './Styles/Player.scss';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Player() {
    return (
        <div className="player">
            <div className="album">
                <img    src="https://img.discogs.com/AnoqBncXnNEWU7QdVcyBgBewE84=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14970187-1586028941-7305.jpeg.jpg" 
                        alt="" 
                        className="songimage" />
                <div className="songinfo">
                    <h4>After Hours</h4>
                    <p>The Weeknd</p>
                </div>
            </div>

            <div className="controls">
                <ShuffleIcon className="control_green" />
                <SkipPreviousIcon className="control_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="control_icon" />
                <SkipNextIcon className="control_icon" />
                <RepeatIcon className="control_green" />
            </div>

            <div className="volume">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Player