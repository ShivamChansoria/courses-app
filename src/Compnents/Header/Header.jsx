import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { motion } from "framer-motion";


const Navbar = () => {

   const navbtnVariants= {
     hover:{
        scale:1.4,
        y:-5,
        textShadow: "2px 2px 5px #000063",
     },
   };

   const subbtnVariants= {
    hover:{
       scale:1.1,
       y:-5,
       textShadow: "1px 1px 5px #000063",
       }
    };
    
    const searchVariants= {
        hover:{
           scale:1.2,
           y:-4,
           boxShadow: "2px 2px 5px #000063",
           }
        };
    


    const navigate= useNavigate();
    const user= useSelector((state)=> state.user);
    const cart= useSelector((state)=> state.cart);
    useEffect(() => {
        console.log(cart.length);
        if(user){
            toast.success(`You're logged in with email: ${user.user.email}`);
        console.log(`User is logged in with email: ${user.user.email}`);
        }
        else console.log("No one is logged in");
    },);

    const handleLogin = () => {
        navigate("/login");
   };
   const handleSignup = () => {
    navigate("/signup");
};

   const handleCart= () => {
    navigate("/cart");
};
    return (
        <div className='header-container'>
           <div className="logo-container">
               <img />
           </div>
           <div className="nav-btns">
            <div className="courses" >
            <motion.span
                 variants={navbtnVariants}
                 whileHover="hover"
                 className="courses-btn" >Courses</motion.span>
            <div className="onHover1" >
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Course 1</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Course 2</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Course 3</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Course 4</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Course 5</motion.span>
                </div> 
           </div>
           <div  className="syllabus" >
           <motion.span 
               variants={navbtnVariants}
               whileHover="hover"
               className="syllabus-btn" >Syllabus</motion.span>
           <div className="onHover2" >
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 1</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 2</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 3</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 4</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 5</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 6</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 7</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 8</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Syllabus 9</motion.span>
                </div> 
           </div>
           <div className="categories" >
           <motion.span
                variants={navbtnVariants}
                whileHover="hover"
                 className="categories-btn" >Categories</motion.span>
          <div className="onHover3" >
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Category 1</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Category 2</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Category 3</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Category 4</motion.span>
                <motion.span
                variants={subbtnVariants}
                 whileHover="hover"
                >Category 5</motion.span>
                </div> 
           </div>
           </div>

           <motion.div 
              variants={searchVariants}
              whileHover="hover"
           className="search-bar">
            <input type="text" name="search"></input>
           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"></path></svg>
            <span className="search-txt">Search</span>
           </motion.div>
           {user?
            <div className="login-btn" >
            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={40} viewBox="0 0 24 24"><path fill="currentColor" d="M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3z"></path></svg>
            Your Profile
            <div className="onHover4" >
                
                <div className="login-container" >
                <span>Hello {user.user.email}</span>
                <h3 onClick={handleLogin}>Your Courses</h3>
                </div>
                <div className="signup-hover" >YOUR ACCOUNT</div>
                </div> 
            </div>
           :
          <div className="login-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width={35} height={40} viewBox="0 0 24 24"><path fill="currentColor" d="M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3z"></path></svg>
          Login/Signup
          <div className="onHover4" >
              
              <div className="login-container" >
              <span>Already an user??</span>
              <motion.h3 
               whileHover={{
                scale:1.4
               }}
                  onClick={handleLogin}>LOGIN</motion.h3>
              </div>
              <motion.div 
                 whileHover={{
                 scale:1.1
                 }}
                  className="signup-hover" onClick={handleSignup}>CREATE NEW ACCOUNT</motion.div>
              
              </div> 
              
          </div>

           }
           <div   className="cart-btn" onClick={handleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={35} viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx={10} cy={19} r={1.5}></circle><circle cx={17} cy={19} r={1.5}></circle><path strokeLinecap="round" strokeLinejoin="round" d="M3.5 4h2l3.504 11H17"></path><path strokeLinecap="round" strokeLinejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"></path></g></svg>
             {(cart.length>0) && <motion.div 
                key={cart.length}
                initial={{
                    scale:2,
                    x:-2,
                    y:10,
                    boxShadow: "2px 2px 5px red"
                }}
                animate={{
                    scale:1,
                    x:0,
                    y:[3,-2,3, -2, 3, -3, 0],
                    boxShadow: 0,
                    transition:{
                        duration:0.5,
                    }
                }}
                className="cart-count">{cart.length}</motion.div>}
            </div>
        </div>
    );
}

export default Navbar;
