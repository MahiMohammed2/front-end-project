import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='Layout'>
            <div className='navbar'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/product">Product</NavLink>
                <NavLink to='/add'>Add</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout