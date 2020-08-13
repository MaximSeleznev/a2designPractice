import React from 'react';
import Card from './Card';
import Header from '../Header';
import TypeSelect from './TypeSelect'
import news from './news.json';
import '../../styles/main.sass';
import { Link, useRouteMatch } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg'


const News = () => {
    let newsFiltered = ["all"]
    for (let item of news) {
        if (!newsFiltered.includes(item.type)) {
            newsFiltered.push(item.type);
        }
    }
    
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
                <div className="news-types">
                { newsFiltered.map((item, index) => (
                        <TypeSelect key={index} type={item} isActive={item==="all"?true:false}/>   
                    ))}
                </div>
                <div className="news-cards">
                    { news.map((item, index) => (
                        <Card key={index} nickname={item.nickname} message={item.message} type={item.type}/>   
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News;
