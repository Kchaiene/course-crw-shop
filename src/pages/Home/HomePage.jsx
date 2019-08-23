import React from 'react';
import Directory from "../../components/Directory/Directory";
import HomePageContainer from "./HomePage_styles";



const HomePage = () => {
    return (
        <HomePageContainer>
            <h1>Welcome to my Homepage</h1>
            <Directory />

        </HomePageContainer>
    );
};

export default HomePage;
