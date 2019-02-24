import styled from 'styled-components';
// import { Button } from '../../elements';
import { colors, metrics } from '../../styles';


const FormContainer = styled.div`
  align-self: center;
  background:${colors.lighter};
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  padding:0 ${metrics.basePadding}px;
  margin-top:${metrics.baseMargin}px;
  max-width: ${metrics.baseWidth}px;

  form {
    flex:1;
    display:flex;
  }
  input {
    flex:1;
    border:none;
    padding:${metrics.basePadding / 2}px;
    height:40px;
    font-size:1em;
    color:${colors.regular};
    background:${colors.transparent};
  }

`;


export {
  FormContainer,

};
