import React from 'react'

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.FileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${this.FileInput.current.files[0].title}`
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