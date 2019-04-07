import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Logo,
  PageHeader,
  WrapperHeader,
  Navegation,
} from './styles';

import logoMoviel from '../../assets/moviel-logo.svg';

class Header extends Component {

  render() {
    return (
      <PageHeader>
        <WrapperHeader>
          <Logo to="/"><img src={logoMoviel} alt="Moviel" /></Logo>
          <Navegation>
            <NavLink exact activeClassName="menu-active" to="/">Search</NavLink>
            <NavLink exact activeClassName="menu-active" to="/favorites">Favorites</NavLink>
          </Navegation>
        </WrapperHeader>
      </PageHeader>
    );
  }
}

export default Header;
