import React, { Component } from 'react';
import SearchRCard from '../../components/SearchR/SearchRCard'
import './explorepage.css'
import { youTubeAPI } from '../../services/functions'

class ExplorePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchQuery: '',
            videos: []
        }
    }

    handleInput = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    handleEnterPress = (e) => {
        e.preventDefault()
        let { searchQuery } = this.state;

        youTubeAPI(searchQuery)
            .then(res => {
                console.log(res)
                this.setState({ videos: res.data.items })
            })
            .catch(err => {
                console.log(err.toString())
            })
    }



    render() {
        console.log(this.state)
        let { videos } = this.state;
        return (
            <>
                <div className='search'>
                    <form onSubmit={this.handleEnterPress}>
                        <input type='text' className='search_input' placeholder='Explore Videos Here!' onChange={this.handleInput} name='searchQuery' value={this.state.searchQuery} autoComplete='off'></input>
                    </form>
                </div>

                <div className='card_container'>
                {
                    videos.map(( e, i ) => {
                        return (
                            <SearchRCard key={i} title={e.snippet.title} description={e.snippet.description} thumbnails={e.snippet.thumbnails.high.url}/>
                        )
                    })
                }
                </div>
        
            </>
        )
    }
}

export default ExplorePage;