import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/main.sass';
import Header from '../Header';


const Home = () => {
    return (

        <div>
            <Header/>
            <section className="home">
                <div className="home-content">
                    <h1>The perfect news community <br/> made for everyone.</h1>
                        <Link className="home-content-link" to="/news">See what's new</Link>
                </div>    
            </section>           
        </div>
    );
}

export default Home;
