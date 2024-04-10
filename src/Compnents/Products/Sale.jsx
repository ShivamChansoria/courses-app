import { useDispatch } from "react-redux";
import { addToCart, addToWish } from "../../Reducer/Reducer";
import "./Sale.css";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Sale = ({image, name, details, price, discounted_price}) => {

    const tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            15,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
        

    const buttonVariants={
        hover:{
            scale: 1.1,
            boxShadow: "2px 2px 5px #000063",
        },
        click:{
            x:[15,-15,15,-15,15,-15,15,0],
            transition:{
                duration: 5
            }
        },
        initial:{
            x:0,
        }
    };
    const dispatch= useDispatch();
    const handleAdd= (e) =>{
           e.preventDefault();
           dispatch(addToCart({
           product: {
            name:name,
            details:details,
            price:price,
            discounted_price:discounted_price,
           }}));
     };
  
     const handleAddWIsh= (e) =>{
        e.preventDefault();
        dispatch(addToWish({
            product: {
                name:name,
                details:details,
                price:price,
                discounted_price:discounted_price,
            }
        }));
 }
    return (
        <Tilt options={tiltOptions}>
        <div className="product-container--sale">
        <div className="image-container" >
         {image}
        </div>
        <div className="product-info--sale" >
              <h3>{name}</h3>
              <p>{details}</p>
              <div className="pricing" >
              <strike>₹{price}</strike>
              <h4>₹{discounted_price}</h4>
              </div>
              
        </div>
        <div className="btns--sale" >
            <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            initial="initial"
            whileTap="click"
            onClick={handleAdd} >Add To Cart</motion.button>
            <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            initial="initial"
            whileTap="click"
            onClick={handleAddWIsh}>Add To Wishlist</motion.button>
        </div>
    </div>
    </Tilt>
    );
}

export default Sale;
