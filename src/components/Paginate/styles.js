import styled from 'styled-components';

import { colors, metrics } from '../../styles';
import { Button } from '../../styles/elements';


export const PaginationContainer = styled.div`
  display:flex;
  justify-content:center;
  padding:${metrics.basePadding}px 0;

  > div {
    width:100%;
    max-width: ${metrics.baseWidth}px;
  }

`;

export const ButtonsContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

`;

export const ButtonPagination = styled(Button)`
  min-width:36px;
  padding: ${metrics.basePadding / 2}px;
  margin: ${metrics.baseMargin / 4}px;
  font-size: .9em;
  color:${colors.regular};
`;
