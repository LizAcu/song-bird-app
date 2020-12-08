import React from 'react'
import NewSong from './NewSong'

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
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${this.FileInput.current.files[0].title}` // undefined
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.FileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
          
          
          
        );
    }
}

export default FileInput