import styled from 'styled-components';
import { Page } from '../../styles/elements';
import { colors, metrics } from '../../styles';

export const SearchContainer = styled(Page)`
  flex: 0 0 100%;
  background: ${colors.white};
`;

export const FormContainer = styled.div`
  flex: 1;
  border: 2px solid ${colors.light};

  form {
    flex: 1;
    display: flex;
  }

  input {
    flex: 1;
    border: none;
    padding: ${metrics.basePadding / 2}px;
    height: 40px;
    font-size: 1em;
    color: ${colors.regular};
    background: ${colors.transparent};

    &:focus {
      outline: none;
      div & {
        background: ${colors.light};
      }
    }
  }
`;
