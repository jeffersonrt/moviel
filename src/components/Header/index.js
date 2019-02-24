import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { observer } from 'mobx-react';
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

import logoSymbol from '../../assets/moviel-icon.svg';


class Header extends Component {

  render() {
    return (
      <PageHeader>
        <PageHeaderContainer>
          <Logo to="/">
            <img src={logoSymbol} alt="Moviel" />
            <h1>moviel</h1>
          </Logo>
          <span>
            <CustomLink to="/"><Icon><FaSearch /></Icon></CustomLink>
            <CustomLink to="/favorites"><IconFav><FaRegStar /></IconFav></CustomLink>
          </span>
        </PageHeaderContainer>
      </PageHeader>
    );
  }
}

export default withRouter(observer(Header));
