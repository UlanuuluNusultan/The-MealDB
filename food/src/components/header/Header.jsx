import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div>
                <Link to='/'>
                    <img src='https://www.themealdb.com/images/logo-small.png' alt='' />
                </Link>

            </div>
            <nav>
                <div className='menu-items'>
                    <Link to='/' href="">Home</Link>
                    <input type="text" placeholder='Search' />
                </div>
            </nav>
        </header>
    )
}

export default Header