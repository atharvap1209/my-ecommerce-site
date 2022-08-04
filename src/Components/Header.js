import React from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
import { auth } from '../firebase'

function Header() {
    const[{basket, user}, dispatch] = useStateValue();

    const handleLogin = () => {
        if (user) {
          auth.signOut();
        }
      }
  return (
    <nav className='header'>
        <Link   to="/">
        <img className='header-logo' 
        src = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        </Link>

        <div className='header-search'>
        <input className='header-search-input' />
        <i className="fa-solid fa-magnifying-glass search-icon"/>
        
        </div>

        <div className='header-nav'>
            <Link to={!user && '/login'} className='header-link'>
                <div onClick={handleLogin} className='header-option'>
                <span className='header-option-line1'>Hello {user?.email}</span>
                <span className='header-option-line2'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                
            </Link>

            <Link to='/' className='header-link'>
                <div className='header-option'>
                <span className='header-option-line1'>Returns</span>
                <span className='header-option-line2'>& orders</span>
                </div>
                
            </Link>


            <Link to='/' className='header-link'>
                <div className='header-option'>
                <span className='header-option-line1'>Your</span>
                <span className='header-option-line2'>Prime</span>
                </div>
                
            </Link>

            <Link to='/checkout'>
               <div className='header-option-basket'>
                    <span><i className="fa-solid fa-cart-shopping header-icon-colour"/></span>
                    <span className='header-option-line2 header-basket-count'>{basket.length}</span>
               </div>
                
            </Link>


        </div>
        
        
    </nav>
  )
}

export default Header