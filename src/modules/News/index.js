import React from 'react';
import Card from './Card';
import Header from '../Header';
import news from './news.json';
import '../../styles/main.sass';
import { Link } from 'react-router-dom'

const News = () => {
    return (
        <div>
            <Header/>
            <div className="news">
                <div className="news-greetings">
                    <div className="news-greetings-linkBack">
                        <Link to="/">
                        <svg width="102" height="108" viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path d="M58.6273 93.3397L53.5728 98.3942C51.4326 100.534 47.9719 100.534 45.8545 98.3942L1.59378 54.1563C-0.546397 52.0161 -0.546397 48.5554 1.59378 46.438L45.8545 2.17723C47.9947 0.0370531 51.4554 0.0370531 53.5728 2.17723L58.6273 7.2317C60.7902 9.39464 60.7447 12.9237 58.5362 15.0411L31.1009 41.1786H96.5357C99.5639 41.1786 102 43.6147 102 46.6429V53.9286C102 56.9567 99.5639 59.3929 96.5357 59.3929H31.1009L58.5362 85.5304C60.7674 87.6478 60.813 91.1768 58.6273 93.3397Z" fill="white"/>
                        <path d="M57.9239 92.6289L57.9201 92.6326L52.8657 97.6871C51.1139 99.4389 48.2893 99.4334 46.5654 97.6909L46.5614 97.6869L2.30089 53.4491C0.549132 51.6974 0.554599 48.8728 2.29711 47.1488L2.30089 47.1451L46.5616 2.88434C48.3134 1.13258 51.138 1.13805 52.8619 2.88056L52.8657 2.88434L57.9201 7.9388C59.6844 9.70302 59.6501 12.5867 57.8451 14.3183C57.8448 14.3186 57.8445 14.3189 57.8441 14.3192L30.4111 40.4546L28.6015 42.1786H31.1009H96.5357C99.0116 42.1786 101 44.167 101 46.6429V53.9286C101 56.4044 99.0116 58.3929 96.5357 58.3929H31.1009H28.6015L30.4111 60.1169L57.8464 86.2544L57.8478 86.2557C59.6717 87.9866 59.7061 90.8652 57.9239 92.6289Z" stroke="#696969" stroke-opacity="0.5" stroke-width="2"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="-2.01135" y="0.572098" width="110.011" height="107.427" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dx="2" dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                        </Link>
                    </div>
                    <h1>Most recent news <br/> from our users</h1>
                </div>
                <div className="news-cards">
                    { news.map((item, index) => (
                        <Card key={index} nickname={item.nickname} message={item.message}/>   
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
