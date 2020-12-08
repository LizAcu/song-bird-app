import React, { Component } from 'react'
import NewSong from '../NewSong'
import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Label, Icon, Input } from 'semantic-ui-react'

class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            artist: '',
            album: '',
            album_cover: '',
            likes: 0,
            file_name: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.FileInput = React.createRef();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(event.target.value)

    }
    handleSubmit(event) {
        //create an object from these attributes from state
        event.preventDefault();
        console.log(this.state)
        console.log(this.FileInput)
        console.log(this.FileInput.current.inputRef.current.files[0])

        // fetch(process.env.REACT_APP_API_URL + '/music', {
            // method: 'POST',
            // body:
        // })

        this.props.createMusic(this.state)

        this.setState({
            title: '',
            artist: '',
            album: '',
            album_cover: '',
            likes: 0,
            file_name: ''
        })
        // alert(
            // `Selected file - ${this.FileInput.current.files[0].name}` // undefined
        // );
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Label>Title: 
                    <Input type="text"
                           name="title"
                           value={this.state.title}
                           placeholder="Enter a title"
                           onChange={this.handleChange}
                           /> 
                </Label>
                <Label>Artist:
                    <Input type="text"
                           name="artist"
                           value={this.state.artist}
                           placeholder="Enter an artist"
                           onChange={this.handleChange}
                           /> 
                </Label>
                <Label>Album:
                    <Input type="text"
                           name="album"
                           value={this.state.album}
                           placeholder="Enter an album -optional-" 
                           onChange={this.handleChange}
                           />
                </Label>
                <Label>Album Art:
                    <Input type="text"
                           name="album_cover"
                           value={this.state.album_cover}
                           placeholder="Insert album art"
                           onChange={this.handleChange}
                           /> 
                            
                </Label>
                <Label>
                    Upload audio:
                    <Input type="file"
                           name="file_name"
                           ref={this.FileInput}
                           onChange={this.handleChange}
                            />
                </Label>
                <br />
                <Button animated="vertical" color="red" type="Submit">
                    <Button.Content hidden><Icon name="plus circle" /></Button.Content>
                    <Button.Content visible>Upload
                    </Button.Content>
                    </Button>
            </Form>
            </div>
          
          
          
        );
    }
}

export default FileInput