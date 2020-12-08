import * as React from 'react';
import { Card } from 'semantic-ui-react'
export default function Song (props) {
    console.log("I'm in the function song", props)

    const music = props.music.map(song => {
        return(
            <Card.Content textAlign={"center"}>
                 <Card.Description>
                     {/* <h2>{song.title}</h2> */}
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