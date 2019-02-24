import styled from 'styled-components';
import { Icon } from '../../elements';
import { colors, metrics } from '../../styles';

const Column = styled.section`
  color: ${colors.dark};
  padding: ${metrics.basePadding}px;
`;

const Aside = styled.aside`
  color: ${colors.dark};
  padding: ${metrics.basePadding}px;
  img {
    max-width:300px;
  }
`;

const MovieHeader = styled.header`
  display:flex;
  align-items:center;

`;

const MovieTitle = styled.h1`
  color: ${colors.dark};
  margin:0;
  padding:0;
`;

const IconFav = styled(Icon)`

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

export {
  Column,
  Aside,
  MovieHeader,
  MovieTitle,
  IconFav
};
