import React from 'react';

const SearchRCard = props => {
    return (
        <>
        <div class="card" style={{"width": "18rem"}}>
            <img src={props.img} class="card-img-top" alt={props.title} />
                <div class="card-body">
                    <p class="card-text">{props.desc}</p>
                </div>
        </div>
        </>
    )
}

export default SearchRCard;