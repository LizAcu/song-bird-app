import * as React from 'react';
import { Card } from 'semantic-ui-react'
export default function Song (props) {
    console.log("I'm in the function song", props)

    const music = props.music.map(song => {
        return(
            <Card.Content textAlign={"center"}>
                // <Card.Header>
                    // <img src={song.album_cover} width="250" height="200" alt="Album-cover"></img>
                // </Card.Header>
            // </Card.Content>

        )
    })
    
}