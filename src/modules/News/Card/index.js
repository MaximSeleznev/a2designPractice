import React from 'react';

const Card = props => {
    const { nickname, message } = props;
    return (
        <div className="news-cards-card">
            <p className="news-cards-card-nickname"> {nickname} <span className="news-cards-card-nickname-smallText">says: </span></p> 
            <p className="news-cards-card-message">"{message}"</p>
        </div>
    );
};

export default Card;
