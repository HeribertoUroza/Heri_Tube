import React, { Component } from 'react';
// import axios from 'axios';
// import config from '../../config.json'

// import SearchRCard from '../../components/SearchR/SearchRCard'

class HomePage extends Component {

    state = {
        results: [],
        input: ''
    }

    componentDidMount = () => {
        console.log(this.state)
        // axios({
        //     method: 'get',
        //     url: 'https://www.googleapis.com/youtube/v3/search',
        //     params: {
        //         part: 'snippet',
        //         maxResults: 9,
        //         videoDefinition: 'high',
        //         type: 'video',
        //         videoEmbeddable: 'true',
        //         key: config.myKey,
        //         q: 'Avengers',
        //         pageToken: ''
        //     }
        // })
        //     .then(res => {
        //         this.setState({
        //             results: res.data.items
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err.toString())
        //     })
    }

    render() {
        
        return (
            <>  
                Home Page
            </>
        )
    }
}

export default HomePage;