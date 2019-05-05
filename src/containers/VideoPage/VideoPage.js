import React, { Component } from 'react';

class VideoPage extends Component {

    state = {
        currentVideo: ''
    }

    componentDidMount = () => {
        console.log(this.props.match.params.videoID)
        this.setState({
            currentVideo: this.props.match.params.videoID
        })
    }

    render() {
        console.log(this.state)
        const link = `https://www.youtube.com/embed/${this.state.currentVideo}?autoplay=1&fs=1&origin=http://localhost:3001`
        return (
            <>
                <iframe title='yt-video' type="text/html" width="640" height="360"
                    src={link} frameBorder="0"></iframe>
            </>
        )
    }
}

export default VideoPage;