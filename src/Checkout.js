import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"



const Checkout = () => {
    const [{basket , user}]= useStateValue();

    return (
        <div className="checkout">
            <div className="topsec">
                <div className="checkout_left">

                    <img className="banner"
                        src="/BASICS.jpg"
                        alt="Banner"
                    />     

                </div>
                <div className="checkout_right">

                        <Subtotal />


                </div>
            </div>
                    <h2>
                        Hello, {user? user?.email : "Guest"}
                    </h2>
                    <h2 className="checkout_title">{basket.length ===0? "Your Shopping Basket is empty :(" : "Your Shopping Basket" }</h2>

                    {basket.map(item => (
                        <CheckoutProduct id={item.id}
                                         price={item.price}
                                         rating={item.rating}
                                         title={item.title}
                                         image ={item.image}
                                         quantity={item.quantity} />
                    ))}
                     

</div>



    )
}

export default Checkout
