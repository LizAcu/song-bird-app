import React, { Component } from 'react'
import '../App.css'
import DevilAgainfeaturingIkeIonValentineRemix from '../mp3Folder/DevilAgainfeaturingIkeIonValentineRemix.mp3'
import { Howl, Howler } from 'howler'
const audioClips = [
    {sound: DevilAgainfeaturingIkeIonValentineRemix, label: 'Devil Again featuring Ike Ion [ValentineRemix]'}
]


class AudioClipsContainer extends Component {

    soundPlay = (src) => {
        const sound = new Howl ({
            src
        })
        sound.play()
    }

    RenderButtonAndSound = () => {
        return audioClips.map((soundObj, index) => {
            return(
                <button key={index} onClick={() =>this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }


    render () {
        Howler.volume(1.0)
        return (
            <div>Hello clips container
                {this.RenderButtonAndSound}
            </div>
        )

    }
}

export default AudioClipsContainer