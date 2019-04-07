import styled from 'styled-components';
import { Icon } from '../../styles/elements';
import { colors, metrics } from '../../styles';

export const Column = styled.section`
  color: ${colors.dark};
  padding: ${metrics.basePadding}px;
`;

export const Aside = styled.aside`
  position:relative;
  color: ${colors.dark};
  padding: ${metrics.basePadding}px;
  img {
    max-width:300px;
  }
`;

export const MovieHeader = styled.header`
  display:flex;
  align-items:center;

`;

export const MovieTitle = styled.h1`
  color: ${colors.dark};
  margin:0;
  padding:0;
`;

export const IconFav = styled(Icon)`

  margin-left:${metrics.baseMargin / 2}px;

  svg {
    width:30px;
    height:30px;
    stroke-width:16px;
    stroke:${colors.favorite};
    path {
      fill:${colors.favorite};
    }
  }

`;

export const ColumnsContainer = styled.div`
  display:flex;

  @media (max-width: ${metrics.baseSmall}) {
    flex-direction: column-reverse;
  }
`;

export const Rating = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:${metrics.baseMargin/2}px;
  width:40px;
  height:40px;
  border-radius:20px;
  background:${colors.dark};

  p {
    font-size:1.2em;
    color:${colors.white};
  }

`;


