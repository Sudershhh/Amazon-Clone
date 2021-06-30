import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'


function Product({id,title , image , price , rating , quantity}) {
    const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type : 'ADD_TO_BASKET',
            item :{
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

        
            <div className="product" key={id}>
                <div className="product-info">
                    <p>{title}</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product_rating">
                        {Array(rating).fill().map((_, i) => (<p>
                            <img src ="/star-full.svg" alt="Rating" />                        
                        </p>))}
                    </div>

                </div>

                <img src ={image} alt="Product" />

                <button className="addtobasket flip-horizontal-bottom" onClick={addToBasket}>Add to Basket</button>
                
            </div>
        
    )
}

export default Product
