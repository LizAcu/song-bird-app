import * as React from 'react';
import { Card, Button } from 'semantic-ui-react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function Song (props) {
    console.log("I'm in the function song", props) //logs out as empty array on reload wtf 

    const music = props.music.map(music => {
        console.log(music)
        return(
            <Card.Content key={music._id} textAlign={"center"}>
                 <Card.Content textAlign={"center"}>
                <Button color="red"
                onClick={() => props.deletePost(music.id) }>
                    Delete
                </Button>
                </Card.Content>
                <Card.Header>
                    <AudioPlayer
                        src={music.file_name}
                        onPlay={event => console.log("onPlay")} />
                </Card.Header>
                 <Card.Description>
                     <br/>
                     <h2>{music.title}</h2>
                 </Card.Description>
             </Card.Content>   
            
            

        )
    })


    
       return (
    <Card.Group centered={true}>
        {music}
    </Card.Group>
)
       }