import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className='logo_div'>
                    <Link to='/'><img src="images/logo.svg" alt="" /></Link>
                </div>
                <div className='buttons_div'>
                    <Link to='/'><button>Home</button></Link>
                    <button className='button_gradient'>Download Template</button>
                </div>
            </div>
        </header>
    )
}

export default Header
