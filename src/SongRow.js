import React from 'react'
import './Styles/SongRow.scss';

function SongRow({ track }) {
    return (
        <div className="songrow">
            <img src="" alt=""/>
            <div className="songinfo">
                <h1>{track.name}</h1>
            </div>
        </div>
    )
}

export default SongRow
