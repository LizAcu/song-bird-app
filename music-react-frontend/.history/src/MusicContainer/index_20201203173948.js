import React, { Component } from 'react' 



class MusicContainer extends Component {
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
            const musicResponse = await fetch(url)
            console.log(musicResponse)
            const musicJson = await musicResponse.json()

            this.setState({
                music: musicJson.data
            })
        } catch (err) {
            console.error("Error getting Post data.", err)
        }
    }


    render() {
        return (
                <React.Fragment>
                
                <h1>Hello</h1>
                </React.Fragment>
        )
    }

}

 
export default MusicContainer
