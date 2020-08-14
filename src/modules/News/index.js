import React from 'react';
import Card from './Card';
import Header from '../Header';
import TypeSelect from './TypeSelect'
import news from './news.json';
import '../../styles/main.sass';
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow.svg'


const News = () => {

    const newsFiltered = news.reduce((total, current) => {
        if (!total.includes(current.type)) total.push(current.type)
        return total
    }, ["all"])
    
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
