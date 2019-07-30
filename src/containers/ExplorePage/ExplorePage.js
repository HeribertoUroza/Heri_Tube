import React, { Component } from 'react';
import SearchRCard from '../../components/SearchR/SearchRCard'
import './explorepage.css'
import { youtTubeAPI } from '../../services/functions'

class ExplorePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchQuery: ''
        }
    }

    handleInput = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }


    render() {
        console.log(this.state.searchQuery)
        return (
            <>
                <div className='search'>
                    <form>
                        <input className='search_input' placeholder='Explore Videos Here!' onChange={this.handleInput} name='searchQuery' value={this.state.searchQuery} ></input>
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