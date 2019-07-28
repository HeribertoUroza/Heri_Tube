import React, { Component } from 'react';
import SearchRCard from '../../components/SearchR/SearchRCard'
import './explorepage.css'

class ExplorePage extends Component {

    render() {
        return (
            <>
                <div className='search'>
                    <form>
                        <input className='search_input' placeholder='Eplore Videos Here!'></input>
                    </form>
                </div>

                <div className='card_container'>
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