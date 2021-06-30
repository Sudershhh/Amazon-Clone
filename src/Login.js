import React from 'react'
import "./Login.css"
import {Link , useHistory} from "react-router-dom";
import {useState} from "react";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();//programmatically changes the url
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const signIn = e=> {
        e.preventDefault() //Prevents the page from refreshing..

        //Firebase stufff.....

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth => {
                                history.push("/")
            }))
            .catch((error=>alert(error.message)))
    }

    const reg = e=>
    {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {          //successfully created a new email and password
                console.log(auth);
                if(auth){
                    history.push("/")
                }
            })

            .catch( error => alert(error.message))
    }


    return (

        <div className="login">
            <Link to="/">
                <img 
                    className="login_logo"
                    src ="/Amazon_logo.svg" 
                    alt="logo" />

            </Link>
        

            <div className="login_container">
                <h1>Sign-In</h1>
                 <form>
                     <h5>E-Mail</h5>
                     <input type="text" 
                            value={email} 
                            onChange ={e => setEmail(e.target.value)} 
                     />
                     <h5>Password</h5>
                     <input type="password" 
                            value={password} 
                            onChange={e=> setpassword(e.target.value)} 
                     />

                     <button className="login_signinbutton" 
                             onClick={signIn}
                             type="submit">Sign In</button>

                 </form>

                 <p>
                     By Signing in, you agree to the Amazon clone's conditions of Use & Sale.
                     Please see our privacy Notice, our cookies Notice and our Interest-Based Ads Notice.

                </p> 

                <h4>Not a User? Click below to create an amazon account.</h4>
                <button className="login_register"
                        onClick={reg}
                        type="submit"
                        >Create an Account</button>  
                
            </div>
        </div>

    )
}

export default Login
