import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Order.css"
import moment from "moment";
import CurrencyFormat from "react-currency-format";


function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small> Order ID : {order.id}</small>
            </p>
            {order.data.basket?.map(item =>(
                <CheckoutProduct id={item.id}
                                 price={item.price}
                                 rating={item.rating}
                                 title={item.title}
                                 image ={item.image}
                                 quantity={item.quantity}
                                 hideButton = {true}
                /> 
            ))}

            <CurrencyFormat
                renderText = {(value) => (
                                                    
                            <h3 className="order_total">
                                Order Total : {value}
                            </h3>
                                                    
                         )}
                        decimalScale={2} //decimal precision
                        value={order.data.amount / 100}
                        displayType={"text"}
                        thousandSeparator ={true} //Price comma separator
                        prefix={"$"}
            />


        </div>
    )
}

export default Order
