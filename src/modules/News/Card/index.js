import React from 'react';

const Card = props => {
    const { nickname, message, type } = props;
    return (
        <div className="news-cards-card" data-card-type={type}>
            <p className="news-cards-card-nickname"> {nickname} <span className="news-cards-card-nickname-smallText">says: </span></p> 
            <p className="news-cards-card-message">"{message}"</p>
            <p className="news-cards-card-type">{type}</p>
        </div>
    );
};

export default Card;
