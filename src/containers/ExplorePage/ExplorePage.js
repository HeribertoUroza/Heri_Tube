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

                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://i.ytimg.com/an_webp/q3eFXeO62oo/mqdefault_6s.webp?du=3000&sqp=CI779ukF&rs=AOn4CLB62lAfcRmKC8tI2bBOPdscw3_PDw" />
                    </div>

                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                        <p>link in here</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
                
            </>
        )
    }
}

export default ExplorePage;