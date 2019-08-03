import React from 'react';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
import { Modal } from 'react-materialize'
import './searchrcard.css'

const SearchRCard = props => {
    let link = `https://www.youtube.com/embed/tYRS0aXaBC8?autoplay=1&fs=1&origin=http://localhost:3000`
    let video_player = <>
        <iframe title='yt-video' type="text/html"
            src={link} frameBorder="0"></iframe>
    </> //width="640" height="360"
    return (
        <>

            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <Modal header={video_player} trigger={<img className="activator" src={props.thumbnails} alt={props.title} />}></Modal>
                </div>

                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right" style={{cursor: 'pointer'}}>more_vert</i></span>
                    {/* <p>link in here</p> */}
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                    <p>{props.description}</p>
                </div>
            </div>

        </>
    )
}

export default SearchRCard;