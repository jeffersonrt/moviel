import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, metrics } from '../styles';


const Layout = styled.div`
  display:flex;
  flex-direction:column;
  padding:0 ${metrics.basePadding}px;
`;

const LayoutContainer = styled.div`
  display:flex;
  flex:1;
  max-width: ${metrics.baseWidth}px;
`;

const CustomLink = styled(Link)`
  text-decoration:none;
`;

const Button = styled.button`
  appearance: none;
  border:none;
  background:none;
  cursor:pointer;

`;

const Loader = styled.div`
  display:flex;
  justify-content:center;
  padding:${metrics.basePadding}px;
`;

const Icon = styled.div`

  svg {
    width:24px;
    height:24px;
    path {
      fill:${colors.regular};
    }
  }

`;

const IconFav = styled(Icon)`

  svg {
    width:30px;
    height:30px;
    stroke-width:16px;
    stroke:${colors.regular};
    path {
      fill:${colors.regular};
    }
  }

`;


const MovieList = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  width:100%;
  align-self: center;
  margin-top:${metrics.baseMargin}px;
  padding:0 ${metrics.basePadding}px;
  max-width: ${metrics.baseWidth}px;

  img {
    width:100%;
  }

`;

const ButtonFav = styled(Button)`
  position: ${props => props.position || 'relative'};
  top :${props => props.top || 'auto'}px;
  right:${props => props.right || 'auto'}px;
  z-index:999;

   svg {
    width: ${props => props.size || '20'}px;
    height: ${props => props.size || '20'}px;
    path {
      fill:${colors.favorite};
    }
  }
`;

const Message = styled.h3`
  color:${colors.regular};
  text-align:center;
`;


export {
  Layout,
  LayoutContainer,
  Button,
  ButtonFav,
  Loader,
  CustomLink,
  Icon,
  IconFav,
  MovieList,
  Message

};
