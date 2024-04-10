import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { Client, Account } from "appwrite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appwrite_Endpoint_API, appwrite_Project_ID } from "./Appwrite";
import { useDispatch } from "react-redux";
import { setUser } from "../Reducer/Reducer";

const Login = () => {
    const projectID = appwrite_Project_ID;
    const endpoint = appwrite_Endpoint_API;
    
    const navigate= useNavigate(); 
    const dispatch= useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleSignin = async(e) => {
        e.preventDefault();
         const client = new Client()
        .setEndpoint(endpoint) // Your API Endpoint
         .setProject(projectID);  
          
         const account = new Account(client);
         const promise = account.createEmailSession(email, password);

         promise.then( function  (response) {
             console.log(response); // Success
             dispatch(setUser({user:{
              email:response.providerUid
             }
            }));
             const showToast= async() =>{ 
                await toast.success(`Your are now Successfully, Signed in!!`);
         }   
            showToast();
             navigate('/');
        },
         function (error) {
           console.log(error); // Failure
           toast(error.message);
});
    };

    return (
        <div className="login-page">
            <div className="login-container" >
                <h2>USER LOGIN...</h2>
                <div className="login-form" >
                 <form>
                    <h3>LOGIN</h3>
                    <input type="text" onChange={e=> setEmail(e.target.value)} className="email-input" placeholder="Email" />
                    <input type="password"  onChange={e=> setPassword(e.target.value)} className="password-input" placeholder="Password" />
                    <button type="submit" className="submit-btn" onClick={handleSignin} >Submit</button><ToastContainer />
                    <p>Didn't have account?</p>
                    <button onClick={handleSignup} className="signup-btn"> SIGNUP Now !!</button>
                 </form>
                </div>         
            </div>
            <div className="line"></div>
                <div className="login-footer">
                    <span>Privacy Policy.</span>
                    <span>Terms & Service Agreement</span>
                    <span>@All rights reserved..</span>
                    <span className="region">English (India) 
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13"></path><path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7"></path></g></svg>
                    </span>
                </div>
        </div>
    );
}

export default Login;
