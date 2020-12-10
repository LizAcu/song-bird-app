import React, { Component } from 'react'
import './App.css'
import DevilAgainfeaturingIkeIonValentineRemix from './mp3Folder/DevilAgainfeaturingIkeIonValentineRemix.mp3'
import { Howl, Howler } from 'howler'
const audioClips = [
    {sound: DevilAgainfeaturingIkeIonValentineRemix, label: 'Devil Again featuring Ike Ion [ValentineRemix]'}
]


class audioClipsContainer extends Component {

    soundPlay = (src) => {
        const sound = new Howl ({
            src
        })
        sound.play()
    }
    render () {
        Howler.volume(1.0)
        return (
            <div>Hello clips container</div>
        )

    }
}

export default audioClipsContainer