import React from 'react'
import NewSong from '../NewSong'
import { Form, Button, Label, Icon } from 'semantic-ui-react'

class FileInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            artist: '',
            album: '',
            album_cover: '',
            likes: 0
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
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Upload file:
                    <input type="file"
                           name="file-upload"
                           value={this.FileInput}
                           onChange={this.handleChange}
                            />
                </Label>
                <br />
                <Button type="submit">Upload</Button>
            </Form>
          
          
          
        );
    }
}

export default FileInput