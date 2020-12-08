import * as React from 'react';
import { Card } from 'semantic-ui-react'
export default function Song (props) {
    console.log(props)

    const music = props.music.map(song => {
        return(
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    <img src={song.album_cover} width="250" height="200" alt="Album-cover"></img>
                </Card.Header>
            </Card.Content>

        )
    })
    // console.log(props)
    // const title = props.musicData.title
    // const artist = props.musicData.artist
    // const album = props.musicData.album
    // const album_cover = props.musicData.album_cover

    // return (
        // <div>
            {/* {title} */}
            {/* {artist} */}
            {/* {album} */}
            {/* {album_cover} */}
            {/* <audio controls src={this.fileInput}></audio> */}
        {/* </div> */}
        // 
    // )
}