import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import {signInWithGoogle, signInWithPhone, signup} from '../helpers/auth';
import { useForm } from "react-hook-form";


export default function Signup() {
    const { handleSubmit, register, errors } = useForm();
    const [errSignup , setErrSignup] = useState(null);
    const googleSignIn = async ()=> {
       const test = await signInWithGoogle();
       console.log(test)
    };
    const onSubmit = async(values) => {
        try {
             await signup(values.email, values.password)
        }catch (err) {
            setErrSignup(err.message) ;
        }
    };

    return (
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>
                        Sign Up to
                        <Link to="/">Chatty</Link>
                    </h1>
                    <p>Fill in the form below to create an account.</p>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" placeholder="Email" name="email" type="email" autoComplete="true"
                               ref={register({
                                   required: "Required",
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: "invalid email address"
                                   }
                               })}
                        />
                        <span className="icon is-left">
                           <i className="fas fa-envelope"/>
                        </span>
                        {errors.email && errors.email.message}

                    </div>
                    <div>
                        <input className="input" placeholder="Password" name="password" type="password" autoComplete="current-password"
                                ref={register({required: "Required"})}
                        />
                        {errors.password && errors.password.message}
                    </div>
                    <div>
                        {errSignup ? (<span className="tag is-primary is-warning">{errSignup}</span>) : null}
                        <button type="submit" className="button is-info is-light">Sign up</button>
                        <p>Or</p>
                        <button  className="button is-primary" onClick={() => googleSignIn()} type="button">
                            Sign up with Google
                        </button>
                        <p>Or</p>
                        <div id="recaptcha-container"/>

                        <button  className="button is-warning" onClick={() => signInWithPhone("+84967223509")} type="button">
                            Sign up with phone number
                        </button>
                    </div>
                    <hr/>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
    )
}
