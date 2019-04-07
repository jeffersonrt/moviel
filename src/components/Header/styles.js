import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors, metrics } from '../../styles';
import { Wrapper } from '../../styles/elements';


export const PageHeader = styled.header`
  display: flex;
  position:relative;
  height: 100px;
  justify-content:center;
  background-color:${colors.white};
  /* box-shadow: 0px -2px 8px 5px ${colors.darkTransparent}; */
  z-index:999;

  @media (max-width: ${metrics.baseSmall}) {
    height: 120px;
  }

`;

export const WrapperHeader = styled(Wrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${metrics.baseSmall}) {
    flex-direction: column;
  }

`;

export const Logo = styled(NavLink)`
  transition: all .2s ease-in-out;

  img {
    width:auto;
    height:60px;
  }

  &:hover {
    transform:scale(1.05);
  }

`;

export const Navegation = styled.div`
  display:flex;
  flex:1;
  justify-content:flex-end;

  a {
    padding: ${metrics.basePadding}px ${metrics.baseMargin / 2}px;
    margin-left: ${metrics.baseMargin}px;
    color: ${colors.dark};
    text-decoration: none;
    text-transform: uppercase;
  }

  .menu-active {
    font-weight: bold;
    color: ${colors.black};;
  }

  @media (max-width: ${metrics.baseSmall}) {
    a {
      padding: ${metrics.basePadding / 2}px;
    }
  }

`;


