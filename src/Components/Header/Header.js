import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { logOutInitiate } from '../../Redux/actions'

const Header = () => {
    const {user, basket} = useSelector(state => state.data)

    let dispatch = useDispatch()
    const handleAuth = () => {
        dispatch(logOutInitiate())
    }

  return (
    <nav className="header">
        <Link to="/">
            <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
        </Link>

        <div className="header-option" style={{marginRight:"-10px"}}>
            <LocationOnOutlinedIcon />
        </div>
        <div className="header-option">
            <span className="header-option1">Hello</span>
            <span className="header-option2">Select Your address</span>
        </div>
        <div className="search">
            <select>
                <option>All</option>
            </select>
            <input type="text" className="searchInput"/>
            <SearchIcon className="searchIcon " /> 
        </div>
        <div className="header-nav">
            <Link to={`${user ? "/" : "/login"}`} className="header-link">
                <div onClick={handleAuth} className="header-option">
                    <span className="header-option1">Hello, {user ? user.email : "Amazon"}{" "}</span>
                    <span className="header-option2">{user ? "Sign Out" : "Sign In"}</span>
                </div>
            </Link>
            <Link to="/orders" className="header-link">
                <div className="header-option">
                    <span className="header-option1">returns</span>
                    <span className="header-option2">& Orders</span>
                </div>
            </Link>
            <Link to="/login" className="header-link">
                <div className="header-option">
                    <span className="header-option1">Your</span>
                    <span className="header-option2">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className="header-link">
                <div className="header-basket">
                    <ShoppingCartOutlinedIcon />
                    <span className="header-option2 basket-count">{basket && basket.length}</span>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Header