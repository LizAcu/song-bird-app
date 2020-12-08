import React, { Component } from 'react' 
import FileInput from './FileInput'


export default class MusicContainer extends Component {
    constructor(props) {
        super(props)

        this.state={
            music: []
        }
    }


getMusic = async () => {
    try {
        const url = process.env.REACT_APP_API_URL + "/music"
        console.log(url)
        }
    }

}