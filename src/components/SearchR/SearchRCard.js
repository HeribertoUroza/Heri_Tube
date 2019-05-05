import React from 'react';
import { Link } from 'react-router-dom'

const SearchRCard = props => {
    return (
        <>
        <div className="card" style={{"width": "18rem"}}>
            <Link to={`/video/${props.path}`}>
                <img src={props.img} className="card-img-top" alt={props.title} />
            </Link>
                <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div>
                <p>{props.publishedAt}</p>
        </div>
        </>
    )
}

export default SearchRCard;