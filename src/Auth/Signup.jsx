import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Client, Account, ID } from "appwrite";
import { appwrite_Endpoint_API, appwrite_Project_ID } from "./Appwrite";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const projectID = appwrite_Project_ID;
  const endpoint = appwrite_Endpoint_API;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const client = new Client()
      .setEndpoint(endpoint) // Your API Endpoint
      .setProject(projectID); // Your project ID

    const account = new Account(client); //Creating new account
    const promise = account.create(ID.unique(), email, password, name);

    promise.then(
      function (response) {
        console.log(response);
        toast("User is registered successfully!!"); // Success
        setEmail("");
        setPassword("");
        setName("");
        navigate('/login');
      },
      function (error) {
        console.log(error);
        toast(error.message); // Failure
      }
    );

    // toast("Button Clicked");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>USER SIGNING UP...</h2>
        <div className="login-form">
        <div style={{height:"150px"}}></div>
          <form>
          <button  onClick={()=>{navigate('/')}}>back</button>
            <h3>SIGN UP</h3>
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="email-input"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="password-input"
              placeholder="Password"
            />
            <input
              type="text"
              className="mobile-input"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Your Name."
            />
            <button type="submit" onClick={handleSubmit} className="submit-btn">
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
      <div className="line"></div>
      <div className="login-footer">
        <span>Privacy Policy.</span>
        <span>Terms & Service Agreement</span>
        <span>@All rights reserved..</span>
        <span className="region">
          English (India)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={20}
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13"></path>
              <path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7"></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Signup;
