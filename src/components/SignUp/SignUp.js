import React, {useState} from 'react';
import {auth, creatUserProfileDocument} from "../../firebase/firebase.utils";
import InputForm from "../InputForm/InputForm";
import CustomButton from "../CustomButton/CustomButton";

import './sign-up.styles.scss';


const SignUp = () => {
    const [formData, setFormData] = useState({
        displayName:'', email: '', password:'', confirmPassword:''});
    const {displayName, email, password, confirmPassword} = formData;

    // onSubmit
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }
        try {
            const {userAuth} = await auth.createUserWithEmailAndPassword(email, password);
            const userRef = await creatUserProfileDocument(userAuth, {displayName});
            setFormData({
                displayName:'', email: '', password:'', confirmPassword:''});
        } catch (e) {
            console.error("ERROR SIGN-UP", e);
        }

    };

    // onChange
    const onChange = e => {
         e.preventDefault();
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };

    return (
        <div className='sign-up'>
            <h2 className='title'> Dont have account</h2>
            <span> Creat </span>
            <form className='sign-uo-form' onSubmit={onSubmit}>

                <InputForm type='text' name='displayName' value={displayName}
                           onChange={onChange} label='Display Name' required
                />
                <InputForm type='text' name='email' value={email}
                           onChange={onChange} label='Email' required
                />
                <InputForm type='password' name='password' value={password}
                           onChange={onChange} label='Password' required
                />
                <InputForm type='password' name='confirmPassword' value={confirmPassword}
                           onChange={onChange} label='Confirm Password' required
                />
                <CustomButton type='submit'
                > SIGN UP </CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
