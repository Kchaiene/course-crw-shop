import React, {useState} from 'react';
import InputForm from "../InputForm/InputForm";
import './signIn.scss';
import CustomButton from "../CustomButton/CustomButton";
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {emailSignInStart, googleSignInStart} from "../../redux/user/userActions";



const SignIn = props => {
    const {dispatch} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setKeyObj = { email: setEmail, password: setPassword};

    const onSubmit =  e =>{
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }) );
    };

    const onChange = e => {
        const {name, value} = e.target;
        setKeyObj[name](value);
    };

    const onGoogleSigIn = async e =>{
       // e.preventDefault();
        dispatch(googleSignInStart());
    };

    return (
        <div className='sign-in'>
            <h2>Alredy has account</h2>
            <span>Sign in with your email or account</span>

            <form  onSubmit={onSubmit}>
                <InputForm type='text'  name='email' value={email}
                           onChange={onChange}
                           label='Email' required />

                <InputForm type='password' name='password' value={password}
                           onChange={onChange}
                           label='Password' required />
            <div className='buttons'>
                <CustomButton type='submit'  >Sign In </CustomButton>
                <CustomButton type='button' onClick={onGoogleSigIn} customType ={'google'} > Sign In with Google </CustomButton>
            </div>


            </form>

        </div>

    );
};

export default connect(null)(SignIn);
