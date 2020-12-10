import React, { Component } from 'react'
import { Form, Button, Label, Header } from 'semantic-ui-react'

export default class EditMusic extends Component {
    constructor(props) {
        super(props)

        // this.state = {
            // title: props.musicToEdit.title,
            // artist: props.musicToEdit.artist,
            // album: props.musicToEdit.album,
            // 
        // }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateMusic(this.state)
    }

    render() {
        return(
            <React.Fragnent>
            <Header as='h3'>Edit song</Header>
            <Form onSubmit={this.handleSubmit}>
                <Label>Title:</Label>
                <Form.Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder="Enter new title"
                  onChange={this.handleChange}
                  />
                  <Label>Artist:</Label>
                  <Form.Input
                    type="text"
                    name="artist"
                    value={this.state.artist}
                    placeholder="Enter new artist info"
                    onChange={this.handleChamge}
                    />
                    <Label>Album:</Label>
                    <Form.Input
                      type="text"
                      name="album"
                      value={this.state.album}
                      placeholder="Enter new album info"
                      onChange={this.handleChange}
                      />
                      <Button type="Submit">Update Song</Button>  
            </Form>
            </React.Fragnent>
        )
    }
}