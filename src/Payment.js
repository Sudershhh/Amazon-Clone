import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import {Link, useHistory } from "react-router-dom";
import { useElements , useStripe, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import {db} from "./firebase";

function Payment() {

    const [{basket , user},dispatch] = useStateValue();
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    const [error , setError] = useState(null);
    const [disabled , setDisabled] = useState(true);

    const [succeeded , setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret , setClientSecret] = useState(true);


    useEffect(() => {
        // generate the special stripe secret which allows us charge a customer
        const getClientSecret = async () => {
            const response = await axios ({    //axios is a way of making requests
                    method : 'post',
                    //Stripe expects the total amount in a currencies subunits
                    url : `/payments/create?total=${getBasketTotal(basket) *100}`
            })
            setClientSecret(response.data.clientSecret);          

        }

        getClientSecret();
    
    },[basket])

    console.log("The secret is",clientSecret);

    const handlesubmit = async(event) =>{

            event.preventDefault();
                //Stripe Stuff...
            setProcessing(true);
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method :{ 
                    card :elements.getElement(CardElement)
                }
            }).then(({paymentIntent}) =>{
                //paymentIntent = Payment Confirmation

                db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({  basket : basket, 
                            amount: paymentIntent.amount,
                            created:paymentIntent.created,
                           
                        })
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type:'EMPTY_BASKET'
                })

                history.replace('/orders')
            })  
    }


    const handlecardchange = event=> {
                //Listen for changes in the cardElement
                //and display any errors as the customer types their card details
                
                setDisabled(event.empty); //if the event is empty,disable the button
                setError(event.error ? event.error.message : ""); //if there is an error, display the error message else display nothing
            }

    
    
    
    
    
    
    
            return (
        <div className="payment">
                <div className="payment_container">

                        <h1> 
                            
                            Checkout ( 
                                        <Link to="/checkout">{basket?.length} items
                                        </Link> 
                                    )
                        
                        </h1>
                    {/*Payment-delivery address*/}
                    <div className="payment_section">

                        <div className="payment_title">

                            <h3>Delivery Address</h3>

                        </div>
                        <div className="payment_address">
                            <span>{user? user?.email : "Looks like you have not signed in! Sign In to continue with the Payment Process." }</span> 
                            <span>{user?  "Gandhinagar, Adyar, Chennai-600020, TamilNadu, India" : " "}</span> 
                        </div>

                    </div>



                    {/* items */}

                    <div className="payment_section">

                        <div className="payment_title">

                            <h3>Review items and Delivery</h3>

                        </div>
                        <div className="payment_items">
                            {basket.map(item =>(
                                <CheckoutProduct    id={item.id}
                                                    price={item.price}
                                                    rating={item.rating}
                                                    title={item.title}
                                                    image ={item.image}
                                                    quantity ={item.quantity}
                                                    hideButton = {true}
                                />

                            ) )}
                        </div>
                    </div>





                    {/*payment method */}
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Payment Method</h3>
                        </div>
                        
                        <div className="payment_details">

                            {/*Stripe Magic */}

                            <form onSubmit={handlesubmit}>

                                <CardElement onChange={handlecardchange}/>
                                <div className="payment_pricecontainer">
                                    
                                        <CurrencyFormat
                                            renderText = {(value) => (
                                                    
                                                    <h3>
                                                        Order Total : {value}
                                                    </h3>
                                                    
                                            )}
                                            decimalScale={2} //decimal precision
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandSeparator ={true} //Price comma separator
                                            prefix={"$"}
                                        />

                                        <button className="buynow"   disabled={processing || disabled || succeeded }>
                                            <span>{processing ? <p>Processing</p> : "Buy Now" }</span>
                                        </button>

                                </div>

                                {error && <div>{error}</div>}


                            </form>

                        </div>

                    </div>




                </div>
                   
        </div>
    )
}

export default Payment
