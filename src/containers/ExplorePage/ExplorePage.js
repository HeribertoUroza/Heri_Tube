import React, { Component } from 'react';
import SearchRCard from '../../components/SearchR/SearchRCard'
import './explorepage.css'
import { youTubeAPI } from '../../services/functions'

class ExplorePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchQuery: ''
        }
    }

    handleInput = (e) => {
        console.log(e.key)
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    handleEnterPress = (e) => {
        e.preventDefault();
        youTubeAPI(this.state.searchQuery)
            .then( res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.toString())
            })
            
        // if(this.state.searchQuery !== ''){
            
        // }
    }


    render() {
        console.log(this.state.searchQuery)
        return (
            <>
                <div className='search'>
                    <form type='submit' onClick={this.handleEnterPress}>
                        <input type='text' className='search_input' placeholder='Explore Videos Here!' onChange={this.handleInput} name='searchQuery' value={this.state.searchQuery} ></input>
                    </form>
                </div>

                <div className='card_container'>
                    <SearchRCard />
                    <SearchRCard />
                    <SearchRCard />
                    <SearchRCard />
                    <SearchRCard />
                    <SearchRCard />
                    <SearchRCard />
                    <SearchRCard />

                </div>
        
            </>
        )
    }
}

export default ExplorePage;