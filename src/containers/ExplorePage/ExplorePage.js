import React, { Component } from 'react';
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
                
            </>
        )
    }
}

export default ExplorePage;