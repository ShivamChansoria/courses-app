import Product from "../Products/Product";
import Sale from "../Products/Sale";
import SubProduct from "../Products/SubProduct";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import "./Landing.css";
import { Tilt } from "react-tilt";
import { useEffect, useRef, useState } from "react";

const Landing = () => {

  const ref= useRef(null);
  let inView= useInView(ref);
  useEffect(()=>{
    if(inView){
      // console.log("Visible!!");
      mainControls.start("visible");
    }
  },[inView]);
  const mainControls= useAnimation();

  const sublineVariants = {
    hidden: {
      x: "50vw",
      opacity: "0.5",
    },
    display: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        delay: "0.4",
        // duration: "0.8"
      },
    },
  };

  const componentsVariants ={
    hidden:{opacity:0, y:75},
    visible:{opacity:1, y:0},
  }
  const tiltOptions = {
    reverse:        false,  // reverse the tilt direction
	max:            25,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          3000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

  const buttonVariants = {
    hover: {
      scale: 1.2,
      boxShadow: "2px 2px 5px #000063",
      transition:{
        delay:0
      }
    },
    animate:{
            x:0,
            transition:{
                delay:0.5
            }
        
    },
    click:{
        x:[15,0,15,0,15,0,15,0],
        transition:{
            duration: 1
        }
    }

  };
  return (
    <div className="home-container">
      <div className="animation-container">
        <Tilt options={tiltOptions}>
        <div className="tagline">
          <motion.h1
            initial={{
              scale: 4,
              opacity: 0.5,
              position: "absolute",
              letterSpacing: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              position: "static",
              animationDuration: 10,
              letterSpacing: 0,
            }}
            transition={{ ease: "easeIn", duration: 0.6 }}
          >
            Strive
          </motion.h1>
          <motion.h3
            variants={sublineVariants}
            initial="hidden"
            animate="display"
          >
            for the Best !!
          </motion.h3>
        </div>
        </Tilt>
        <div className="mid-sec">
          <motion.div
            initial={{
                x:"-50vw"
              }}
              animate="animate"
             
            variants={buttonVariants}
            whileHover="hover"
            className="line-1"
          ></motion.div>
          <motion.div
            initial={{
                x:"-150vw"
              }}
              animate="animate"
             
            variants={buttonVariants}
            whileHover="hover"
            className="line-2"
          ></motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeIn",
            }}
            className="info"
          >
            <p>
              “Begin your quest for knowledge with the spark of curiosity, and
              let perseverance be your guide. Challenges are not obstacles, but
              the anvil on which the sword of wisdom is forged. Study
              diligently, focus intently, and let your passion illuminate the
              path to achievement.”
            </p>
          </motion.div>
          <div className="form-container">
            <motion.input
              variants={buttonVariants}
              initial={{
                x: "80vw",
              }}
              animate="animate"
              whileHover="hover"
              placeholder="Full Name..."
              type="text"
              id="name"
            />
            <motion.input
              initial={{
                x: "80vw",
              }}
              animate="animate"

              variants={buttonVariants}
              whileHover="hover"
              placeholder="Contact..."
              type="number"
              id="contact"
            />
            <motion.button
              initial={{
                x: "80vw",
              }}
              animate="animate"
    

              variants={buttonVariants}
              whileHover="hover"
              whileTap="click"
              type="submit"
              className="submit-btn"
            >
              Submit{" "}
            </motion.button>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero1"></div>
          <div className="hero2"></div>
          <div className="hero3"></div>
        </div>
      </div>
      <div className="our-products--sec">
        <h3>Our Products</h3>
        <div className="product-listing">
          <Product
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={300}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-1"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
          <Product
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={300}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-2"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
        </div>
      </div>
      <motion.div 
        variants={componentsVariants}
         initial="hidden"
         animate={mainControls}
      ref={ref}  className="on-sale--sec">
        <h3>On Sale Now</h3>
        <div className="product-listing--sale">
          <Sale
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={150}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-1 Sale"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
          <Sale
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={150}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-2 Sale"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
          <Sale
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={150}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-3 Sale"
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
        </div>
      </motion.div>
      <motion.div 
       variants={componentsVariants}
       initial="hidden"
       animate={mainControls}
      ref={ref} className="experts-advice">
        <div className="product-listing--expert">
          <h3>Expert's Advice</h3>
          <SubProduct
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={100}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-1 "
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
          <SubProduct
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={100}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-2 "
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
          <SubProduct
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={200}
                height={100}
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"
                ></path>
              </svg>
            }
            name="Product-3 "
            details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !"
            price={1000}
            discounted_price={99}
          />
        </div>
      </motion.div>
      <footer  className="footer">
        <div className="uppersection">
          <div className="course">
            <h3>Courses</h3>
            <span className="courses">Course1</span>
            <span className="courses">Course2</span>
            <span className="courses">Course3</span>
            <span className="courses">Course4</span>
            <span className="courses">Course5</span>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <span className="contacts">Contact 1</span>
            <span className="contacts">Contact 1</span>
            <span className="contacts">Contact 1</span>
            <span className="contacts">Contact 1</span>
            <span className="contacts">Contact 1</span>
          </div>
          <div className="about">
            <h3>About</h3>
            <span className="about">
              This is the company’s about section. Here you will find all
              details related to the company’s estalishment. And all the other
              history and big events occured in the company.
            </span>
            <span className="about">
              Thank you for reading the about section.
            </span>
            <span className="about">
              Address- Front of the main mansion, LA, USA. 43234892.{" "}
            </span>
          </div>
          <div className="questions">
            <h3>Q&A</h3>
            <span className="contacts">
              Que:- This is the company’s about section. Here you will find all
              details related to the company’s estalishment. And all the other
              history and big events occured in the company.
            </span>
            <span className="contacts">
              Ans:- Thank you for reading the answer section
            </span>
            <span className="contacts">
              Que:-Sample question is required to this sectin.{" "}
            </span>
            <span className="contacts">
              Ans:- Thank you for reading the answer section.
            </span>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="lowersection">
          <div className="first">
            <span>Privacy Policy</span>
            <span>Terms & Service Agreement</span>
            <span>@All rights reserved</span>
          </div>
          <div className="second">
            <span>English (India) </span>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
