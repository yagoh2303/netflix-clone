import React from 'react'
import './Navbar.css'
import logo from '../assets/imagiflix.png'
import user from '../assets/user.jpg'

function Navbar () {

    return (
        <div className='navbar'>
            <div className="container-logo">

            <img src={logo} alt="Imagiflix" />

            <ul>
                <li className='bold'><a href="#">Início</a></li>
                <li><a href="#">Filmes</a></li>
                <li><a href="#">Séries</a></li>
            </ul>
            </div>
            <div className="user">

            <img  src={user} alt="Imagiflix" />
            </div>
        </div>
    )

}

export default Navbar