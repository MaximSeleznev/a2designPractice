import React from 'react';
import Card from './Card';
import Header from '../Header';
import news from './news.json';
import '../../styles/main.sass';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg'


const News = () => {
    return (
        <div>
            <Header/>
            <div className="news">
                <div className="news-greetings">
                    <div className="news-greetings-linkBack">
                        <Link to="/">
                            <ArrowIcon/>
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
