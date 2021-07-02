import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase';

export default function Header({currentUser}) {
    return (
        <>
            <div className='travel_header'>
                <div className='travel-logo'>
                    <Link to='/'>
                        <img src='https://seeklogo.com/images/E/entertainment-tourism-art-logo-4A82D840D1-seeklogo.com.png' alt='travel_logo'/>
                    </Link>
                </div>
                {currentUser && <div className='user-name'>{currentUser.displayName}</div>}
                <div className='travel-menu'>
                    <NavLink exact to ='/' activeClassName='active'>Home</NavLink>
                    <NavLink exact to ='/yourreview' activeClassName='active'>My review</NavLink>
                    {currentUser ? (
                        <div onClick={ () => auth.signOut()}>Log out</div>) : (
                            <NavLink exact to='login' activeClassName='active'> Log in</NavLink>
                        )
                    }
                </div>
            </div>
        </>
    )
}
