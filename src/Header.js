import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() {

    const [{basket , user},dispatch] = useStateValue();
    
    const handleauthentication = () =>
    {
        if(user)
        {
            auth.signOut();
        }
    }



    const totalBasketLength = basket.reduce((acc, item) => acc + item.quantity,0)


    return (
        <div className = 'header'>
                    <Link to="/">
                        <img                             
                            className="header_logo"
                            src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt="Amazon Logo"
                        />                                            
                    </Link>
                    

                    <div className="header_search">
                        <input className="header_searchinput" 
                                type="text" />
                        <SearchIcon className ="header_searchicon" />                
                    </div> 

                    <div className ="header_nav">
                      <Link to={!user && '/login'}>
                        <div onClick={handleauthentication}className="header_option">
                            <span className="header_option-line1">Hello, {user? user?.email : "Guest"}</span>
                            <span className="header_option-line2">{user ? "Sign Out" : "Sign In"}</span>

                        </div>
                      </Link>   

                        
                            <Link to="/orders">
                                <div className="header_option">
                                
                                    <span className="header_option-line1">Returns</span>
                                    <span className="header_option-line2">Orders</span>

                               </div>
                            </Link>


                        <div className="header_option">
                            <span className="header_option-line1">Your</span>
                            <span className="header_option-line2">Prime</span>
                        </div>

                        <Link to="/checkout">
                            <div className="header_optioncart">
                                <ShoppingCartIcon className="shoppingicon" />
                                <span className="header_option-line2 header_basketcount">{totalBasketLength}</span>
                            </div>
                        </Link>                        
                    </div>                        
        </div>
    )
}

export default Header
