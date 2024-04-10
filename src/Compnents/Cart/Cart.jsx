import { useEffect, useState } from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";


const Cart = () => {
    const pagebtn1= "<";
    const pagebtn2= ">";
    const cart= useSelector((state) => state.cart);
    useEffect(() => {
        // con);
     
    },);

    return (
        <div className="cart-page">
            <div className="cart-container" >
                <div className="upper-section" >
                <h2>Your Cart</h2>
                <span >Showing page 1 0f 100
                    <span>{pagebtn1} </span> 
                    <span>{pagebtn2}</span></span>
                </div>
                <div className="items-section" >
                {cart.length ? cart.map((product) =>(
                        <CartProduct image={product.product.image} details={product.product.details} name={product.product.name} price={product.product.price} discounted_price={product.product.discounted_price} /> )
                    )
                    :
                    <h1 className="empty-cart">Your Cart is Now Empty !!</h1>
                    }
                    
                {/* <CartProduct
                     image={<svg xmlns="http://www.w3.org/2000/svg" width={200} height={100} viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></path></svg>  }
                      name="Product-1 " details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !" 
                      price={1000} discounted_price={99}  
                      />
                       <CartProduct
                     image={<svg xmlns="http://www.w3.org/2000/svg" width={200} height={100} viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></path></svg>  }
                      name="Product-2 " details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !" 
                      price={1000} discounted_price={99}  
                      />
                        <CartProduct
                     image={<svg xmlns="http://www.w3.org/2000/svg" width={200} height={100} viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></path></svg>  }
                      name="Product-3 " details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !" 
                      price={1000} discounted_price={99}  
                      />
                      <CartProduct
                     image={<svg xmlns="http://www.w3.org/2000/svg" width={200} height={100} viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></path></svg>  }
                      name="Product-4 " details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !" 
                      price={1000} discounted_price={99}  
                      />
                       <CartProduct
                     image={<svg xmlns="http://www.w3.org/2000/svg" width={200} height={100} viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></path></svg>  }
                      name="Product-4 " details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !" 
                      price={1000} discounted_price={99}  
                      />
                           <CartProduct
                     image={<svg xmlns="http://www.w3.org/2000/svg" width={200} height={100} viewBox="0 0 1024 1024"><path fill="currentColor" fillRule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></path></svg>  }
                      name="Product-4 " details="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitaeLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia, dicta, illo voluptatum cum dolores laboriosam cupiditate perferendis error nostrum natus vitae earum soluta !" 
                      price={1000} discounted_price={99}  
                      /> */}
                      
                </div>
                <div className="cart-line" ></div>
                <div className="cart-footer" >
                <span>Privacy Policy.</span>
                    <span>Terms & Service Agreement</span>
                    <span>@All rights reserved..</span>
                    <span className="region">English (India) 
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={20} viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13"></path><path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7"></path></g></svg>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Cart;
