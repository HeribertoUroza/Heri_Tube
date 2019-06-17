import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.json'

import SearchRCard from '../../components/SearchR/SearchRCard'

class HomePage extends Component {

    state = {
        results: [],
        input: ''
    }

    componentDidMount = () => {
        console.log(this.state)
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 9,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: config.myKey,
                q: 'Avengers',
                pageToken: ''
            }
        })
            .then(res => {
                this.setState({
                    results: res.data.items
                })
            })
            .catch(err => {
                console.log(err.toString())
            })
    }

    render() {
        console.log(this.state)
        const { results } = this.state
        return (
            <>
                <nav>
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field">
                                <input id="search" type="search" required />
                                    
                            </div>
                        </form>
                    </div>
                </nav>


                <div className='container'>
                    <div className=''>
                        <div className='row' style={{ "justifyContent": "center" }}>
                            {
                                results.map((e, i) => {
                                    return (
                                        <SearchRCard key={i}
                                            img={e.snippet.thumbnails.high.url}
                                            title={e.snippet.title}
                                            desc={e.snippet.description}
                                            publishedAt={e.snippet.publishedAt}
                                            path={e.id.videoId}

                                        />
                                    )
                                })
                            }
                        </div>

                    </div>


                </div>

            </>
        )
    }
}

export default HomePage;