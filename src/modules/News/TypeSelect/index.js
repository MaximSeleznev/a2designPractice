import React from 'react';

const TypeSelect = props => {
    const { type, isActive,} = props;
    function displayType(e) {
        e.preventDefault();
        let cards = document.querySelectorAll(".news-cards-card")
        let types = document.querySelectorAll(".news-types p")
        types.forEach((item) => {
            item.dataset.active="false"
        })
        e.target.dataset.active="true"
        if (e.target.dataset.newsType == "all") {
            cards.forEach((card) => {
                card.classList.remove("hide")
            })
            return
        }
        cards.forEach((card) => {
            if (card.dataset.cardType != e.target.dataset.newsType) {
                card.classList.add("hide")
            } else {
                card.classList.remove("hide")
            }
        })
    }
    return (
            <p data-news-type={type} data-active={isActive} onClick={displayType}>{type}</p>
    );
};

export default TypeSelect;
