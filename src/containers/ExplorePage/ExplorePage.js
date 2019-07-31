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
            .then( res => {
                this.setState({videos: res.data.items})
            })
            .catch(err => {
                console.log(err.toString())
            })
            
        // if(this.state.searchQuery !== ''){
            
        // }
    }



    render() {
        console.log(this.state)
        let { videos } = this.state;

        return (
            <>
                <div className='search'>
                    <form onClick={this.handleEnterPress}>
                        <input type='text' className='search_input' placeholder='Explore Videos Here!' onChange={this.handleInput} name='searchQuery' value={this.state.searchQuery} ></input>
                    </form>
                </div>

                <div className='card_container'>
                {
                    videos.map(( e, i ) => {
                        return (
                            <SearchRCard />
                        )
                    })
                }
                </div>
        
            </>
        )
    }
}

export default ExplorePage;