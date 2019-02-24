import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, metrics } from '../../styles';
import { LayoutContainer } from '../../elements';


const PageHeader = styled.section`
  display:flex;
  justify-content:center;
  padding:${metrics.basePadding / 2}px ${metrics.basePadding}px;
`;

const PageHeaderContainer = styled(LayoutContainer)`
  justify-content:space-between;
  span {
    display:flex;
    justify-content:center;
    align-items:center;

    a {
      margin:${metrics.baseMargin / 2}px;
      padding:${metrics.basePadding / 2}px;
    }
  }

`;

const Logo = styled(Link)`

  display:inline-flex;
  align-items:center;
  text-decoration:none;
  color: ${colors.primary};
  transition: all .2s ease-in-out;

  img {
    width:60px;
    height:60px;
  }

  h1 {
    margin:0;
    padding:0;
    font-size:2em;
    font-weight:400;
  }

  &:hover {
    transform:scale(1.1);
  }

`;

export {
  PageHeader,
  Logo,
  PageHeaderContainer,
};
