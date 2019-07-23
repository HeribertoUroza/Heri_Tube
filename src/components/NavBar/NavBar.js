import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import vid_player from '../../icons/video_player.png'
import M from 'materialize-css'
import './navbar.css';

class NavBar extends Component {

    state = {
        searchQueries: ['this is 1 q', 'number 2', 'third', '44444']
    }

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        const {searchQueries} = this.state
        return (
            <>
                <nav className="nav-extended">
                    <div className="nav-wrapper _nav_bar">
                        <Link to="/" ><img src={vid_player} alt='vid_player' /></Link>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <Link to="/add"><li className="tab"><span className="active nav-font">Add</span></li></Link>
                            {
                                searchQueries.map( (e, i) => {
                                    return (
                                        <Link to="/add" key={i}><li className="tab"><span className="active nav-font">{e}</span></li></Link>
                                    )
                                })
                            }
                            <li className="tab"><a></a></li>
                        </ul>
                    </div>
                </nav>


                {/* <div id="test1" className="col s12">Test 1</div>
                <div id="test2" className="col s12">Test 2asd</div>
                <div id="test3" className="col s12">Test 3</div>
                <div id="test4" className="col s12">Test 4</div> */}
            </>
        )
    }
}

export default NavBar;