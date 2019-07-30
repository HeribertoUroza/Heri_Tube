import React, { Component } from 'react';
import SearchRCard from '../../components/SearchR/SearchRCard'
import './explorepage.css'
import { youtTubeAPI } from '../../services/functions'

class ExplorePage extends Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
            <>
                <div className='search'>
                    <form>
                        <input className='search_input' placeholder='Explore Videos Here!'></input>
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