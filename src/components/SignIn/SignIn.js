import React, {useState} from 'react';
import InputForm from "../InputForm/InputForm";
import './signIn.scss';
import CustomButton from "../CustomButton/CustomButton";
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setKeyObj = { email: setEmail, password: setPassword};

    const onSubmit = async e =>{
        e.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email, password);
            setEmail(''); setPassword('');
        }catch (e) {
            console.log('ERROR SIGN-IN', e);
        }
    };

    const onChange = e => {
        const {name, value} = e.target;
        setKeyObj[name](value);
    };

    const onClick = async e =>{
        e.preventDefault();
        signInWithGoogle();
    };
    //console.log('SignIN', password, email);

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
                <CustomButton onClick={onClick} customType ={'google'} > Sign In with Google </CustomButton>
            </div>


            </form>

        </div>

    );
};

export default SignIn;
