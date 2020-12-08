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
        this.createMusic = this.createMusic.bind(this)
    }

    // getMusic() {
        // fetch(process.env.REACT_APP_API_URL + "/music") 
        // { start comment out here
            // method: 'GET',
            // headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            // }
        // }) end comment out here
        // .then(data => {
            // return data.json()}, 
            // err => console.error("Error", err))
        // .then(parsedData => console.log(parsedData),
        // err => console.log(err))
    // }

    getMusic = async () => {
        try {
            const url = process.env.REACT_APP_API_URL + "/music"
            console.log(url)
            const musicResponse = await fetch(url)
            console.log(musicResponse)
            const musicJson = await musicResponse.json()
            this.setState({
                music: musicJson
            })
        } catch(err) {
            console.log('Error getting music data.', err)
        } 
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

    // createMusic(songInfo) {
        // const copyMusic = [...this.state.music]
        // copyMusic.unshift(songInfo)
        // this.setState({
            // music: copyMusic,
            // title: '',
            // artist: '',
            // album: '',
            // album_cover: '',
            // likes: 0
        // })
        // console.log(songInfo)


    // }
    createMusic = async (addNewMusic) => {
        try {
            const url = process.env.REACT_APP_API_URL + "/music"
            const newMusicResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addNewMusic)
            })
            const newMusicJson = await newMusicResponse.json()
            console.log(newMusicJson)
            if (newMusicResponse.status === 200 || newMusicResponse.status === 201){
                this.setState({
                    music: [...this.state.music, newMusicJson]
                })
            }
        } catch(err) {
            console.log('error', err)
        }
    }


    render() {
        return (
            <div className="container">
                <h3>Playlists</h3>
                <FileInput
                    music={this.state.music}
                    createMusic={this.createMusic}
                />
                <Song 
                    music={this.state.music}
                />
            </div>
        )
    }

}

 
export default MusicContainer
