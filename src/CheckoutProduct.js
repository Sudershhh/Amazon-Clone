import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,image,title,price,rating,quantity, hideButton}) {
    const [{basket}, dispatch]= useStateValue();
    const removefrombasket =() =>{

        //Remove items from basket
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,
                quantity:quantity
            }
            
        })

    }

    const clearItemFromBasket = () =>
    {
        dispatch({
            type : 'CLEAR_ITEM_FROM_BASKET',
            id:id
        })
    }
    
    const increaseItemHandler = () =>
    {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,
                quantity:quantity
            }
        })
    }

    
    

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_image"    
                 src={image}
                 alt='Product'
            />

            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    
                    <strong>${price.toFixed(2)}</strong>
                </p>

                <div className="checkoutproduct_rating">
                    {Array(rating).fill().map((_,i) =>(<p><img src ="/star-full.svg" alt="Rating" /></p>))}
                </div>


                {!hideButton && ( <>
                                    <div className="removebutton">
                                        <button className="removefrombasket"
                                                onClick={clearItemFromBasket}>Remove from Basket
                                        </button>
                                    </div>
                                     <div className="quantity">
                                        <button className="button-ctrl" onClick={removefrombasket} >-</button>
                                            <p>Quantity : {quantity} </p>
                                            <button className="button-ctrl" onClick={increaseItemHandler} >+</button>
                                    </div>
                                </>
                                )
                }

                {hideButton && <p>Quantity : {quantity}</p>}
                


               

                
            </div>     
            
        </div>
    )
}

export default CheckoutProduct
