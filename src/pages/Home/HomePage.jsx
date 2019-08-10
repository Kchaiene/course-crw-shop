import React from 'react';
import './HomePage.style.scss';
import Directory from "../../components/Directory/Directory";



const Homepage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
            <Directory />

        </div>
    );
};

export default Homepage;
