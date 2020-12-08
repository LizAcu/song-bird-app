import React, { Component } from 'react' 
import Song from '../Song'
import FileInput from "../FileInput"


class MusicContainer extends Component {
    constructor(props) {
        super(props)

        this.state={
            // music: []
            // title: '',
            // artist: '',
            // album: '',
            // album_cover: '',
            // likes: 0,
            music: []
        }
        this.getMusic = this.getMusic.bind(this)
    }

    getMusic() {
        fetch(process.env.REACT_APP_API_URL + "/music") 
        // {
            // method: 'GET',
            // headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            // }
        // })
        .then(data => {
            return data.json()}, //unexpected token at position 0?
            err => console.error("Error", err))
        .then(parsedData => console.log(parsedData),
        err => console.log(err))
    }
    componentDidMount() {
        this.getMusic()
    }

    // getMusic() {
        // try {
            // const url = process.env.REACT_APP_API_URL + "/music"
            // console.log(url)
            // const musicResponse = await fetch(url)
            // console.log(musicResponse)
            // const musicJson = await musicResponse.json()

            // this.setState({
                // music: musicJson.data
            // })
        // } catch (err) {
            // console.error("Error getting Post data.", err)
        // }
    // }

    //create route

    createMusic() {


    }
    // createMusic(addNewMusic) {
        // try {
            // const url = process.env.REACT_APP_API_URL + "/music"
            // const newMusicResponse = await fetch(url, {
                // method: 'POST'
            // })
        // }
    // }


    render() {
        return (
            <div className="container">
                <h1>music container</h1>
                <FileInput
                    music={this.state.music}
                />
                <Song 
                    music={this.state.music}
                />



            </div>
        )
    }

}

 
export default MusicContainer
