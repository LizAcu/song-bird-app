import * as React from 'react';

export default function Song (props) {
    console.log(props)
    const title = props.musicData.title
    const artist = props.musicData.artist
    const album = props.musicData.album
    const album_cover = props.musicData.album_cover

    return (
        <div>
            {title}
            {artist}
            {album}
            {album_cover}
            <audio controls src={this.fileInput}></audio>
        </div>
        
    )
}