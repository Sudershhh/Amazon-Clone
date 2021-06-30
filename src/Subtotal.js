import React from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import {useHistory} from "react-router-dom";


const Subtotal = () => {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    
    const subtotalBasketLength = basket.reduce((acc, item) => acc + item.quantity,0)


    return (
        <div className="subtotal">
            <CurrencyFormat
                    renderText = {(value) => (
                        <>
                            <p>
                                Subtotal ({subtotalBasketLength} items) : <strong>{value}</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type ="checkbox" /> This Order contains a gift

                            </small>
                        </>
                    )}
                    decimalScale={2} //decimal precision
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator ={true} //Price comma separator
                    prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}
                    className="jello-horizontal">Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal

