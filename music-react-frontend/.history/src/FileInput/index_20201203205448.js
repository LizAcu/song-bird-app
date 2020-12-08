import React from 'react'
import NewSong from '../NewSong'
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
            filename: ''
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.FileInput = React.createRef();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${this.FileInput.current.files[0].title}` // undefined
        );
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Upload file:
                    <Form.Input type="file"
                           name="file-upload"
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