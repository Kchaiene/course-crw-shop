import React from 'react';
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import './signPage.scss';


const SignPage = () => {
    return (
        <div className='sign-page'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default SignPage;
