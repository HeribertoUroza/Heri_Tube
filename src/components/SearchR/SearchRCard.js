import React from 'react';

const SearchRCard = props => {
    return (
        <>
        <div className="card" style={{"width": "18rem"}}>
            <img src={props.img} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div>
        </div>
        </>
    )
}

export default SearchRCard;