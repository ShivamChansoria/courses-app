import React from 'react';
import Navbar from '../Header/Header';
import Landing from './Landing';
import "./Home.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';


const Home = () => {
    const headerVariants={
     hidden:{
        opacity:0,
     },
     display:{
        opacity:1,
        transition:{
            duration:1,
            delay:1
        }
     }
    };
    return (
        <div className='main-container'>
        <ToastContainer />
            <motion.div 
            variants={headerVariants}
            initial="hidden" animate="display"
            className='navbar-container' >
            <Navbar />
            </motion.div>
            <Landing />
        </div>
    );
}

export default Home;
