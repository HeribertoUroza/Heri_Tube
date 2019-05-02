import React, { Component } from 'react';
import axios from 'axios'

import SearchRCard from '../../components/SearchR/SearchRCard'

class HomePage extends Component {

    state = {
        results: []
    }

    render() {
        return (
            <>
                HomePage
                <SearchRCard />
            </>
        )
    }
}

export default HomePage;