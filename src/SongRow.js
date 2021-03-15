import React from 'react'
import './Styles/SongRow.scss';

function SongRow({ track }) {
    return (
        <div className="songrow">
            <img src={track.album.images[0].url} alt="album" className="albumimage" />
            <div className="songinfo">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
