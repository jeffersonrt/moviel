import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FaRegStar, FaSearch } from 'react-icons/fa';

import {
  Icon,
  IconFav,
  CustomLink
} from '../../elements';

import {
  Logo,
  PageHeader,
  PageHeaderContainer,
} from './styles';

import logoSymbol from '../../assets/moviel-logo.svg';


class Header extends Component {

  render() {
    return (
      <PageHeader>
        <PageHeaderContainer>
          <Logo to="/">
            <img src={logoSymbol} alt="Moviel" />

          </Logo>
          <span>
            <NavLink exact activeClassName="menu-active" to="/">Search</NavLink>
            <NavLink exact activeClassName="menu-active" to="/favorites">Favorites</NavLink>
          </span>
        </PageHeaderContainer>
      </PageHeader>
    );
  }
}

export default withRouter(Header);
