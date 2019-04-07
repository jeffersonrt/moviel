import styled, { createGlobalStyle } from 'styled-components';
import { colors, metrics } from '../';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: ${colors.lighter};
  }
  #root {}
`;

export const Wrapper = styled.div`
  flex:1;
  display: flex;
  justify-content:center;
  max-width: ${metrics.baseWidth}px;
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;


export const Button = styled.button`
  appearance: none;
  border:none;
  background:${colors.transparent};
`;


export const ButtonFav = styled(Button)`
  cursor:pointer;
  position: ${props => props.position || 'relative'};
  top :${props => props.top || 'auto'}px;
  right:${props => props.right || 'auto'}px;
  z-index:999;

    &:focus{
      outline:none;
    }

   svg {
    width: ${props => props.size || '20'}px;
    height: ${props => props.size || '20'}px;
    path {
      fill:${colors.favorite};
    }
  }
`;

export const Message = styled.h3`
  color: ${colors.dark};
`;

export const Error = styled(Message)`
  color: ${colors.danger};
`;

export const MoviesList = styled.div`
  flex:1;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1rem;
`;

export const Content = styled.div`
  flex:1;
`;

export const Icon = styled.div`
  svg {
    width:24px;
    height:24px;
    path {
      fill:${colors.light};
    }
  }
`;

export const IconFav = styled(Icon)`
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

