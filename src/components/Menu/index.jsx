import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { MenuButton } from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo da aluraflix" />
      </Link>

      <MenuButton as={Link} className="Button" to="/cadastro/videos">
        Cadastro de Video
      </MenuButton>
    </nav>
  );
}

export default Menu;
