import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const SearchRCard = props => {
    return (
        <>
        <div className="card mx-3 my-3" style={{"width": "18rem"}}>
            <Link to={`/video/${props.path}`}>
                <img src={props.img} className="card-img-top" alt={props.title} />
            </Link>
                <div className="card-body">
                    <h5>{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <Moment fromNow><p>{props.publishedAt}</p></Moment>
        </div>
        </>
    )
}

export default SearchRCard;