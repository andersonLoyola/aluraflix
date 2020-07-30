import React from 'react';
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './ButtonLink'
import './Menu.css';
function Menu() {
    return  (
        <nav className = "Menu" href = "/">
            <a >
                <img className = "Logo" src = {Logo} alt="Logo da aluraflix"/>
            </a>
            <ButtonLink className = "ButtonLink" href = "/" >
                Proximo Video   
            </ButtonLink>


        </nav>
    );
}

export default Menu;