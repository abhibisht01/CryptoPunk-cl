import React from 'react'
import '../css/header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchLogo from '../assets/header/search.png'
import switchTheme from '../assets/header/theme-switch.png'

const Header = () => {


    return (
        <div className='header'>
            <div className="logoContainer">
                <img src={punkLogo} className='punkLogo' alt="" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchLogo} alt="" />
                </div>
                <input type="text" placeholder='Collection, item or user' className='searchInput' />
            </div>
            <ul className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </ul>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={switchTheme} alt="" />
                </div>
            </div>
            <div className="loginButton">GET IN</div>
        </div>
    )
}

export default Header

