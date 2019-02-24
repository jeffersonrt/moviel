import styled from 'styled-components';
import { colors } from '../../styles';

const MovieCard = styled.div`

  position:relative;
  transition: all .2s ease-in-out;

  &::before{
    content:'';
    position:absolute;
    width:100%;
    height: 50%;
    pointer-events:none;
    background: linear-gradient(to bottom, ${colors.darkTransparent} 0%, ${colors.transparent}  100% ) ;
  }

  &:hover {
    transform:scale(1.05);
  }


  h2 {
    text-align:center;
    font-size:1em;
    font-weight:400;
    color:${colors.regular}
  }

  a {
    text-decoration:none;
  }

  span {
    position:absolute;
    top:12px;
    left:10px;
    font-weight:600;
    color: ${colors.white};
  }


`;


export {
  MovieCard,

};
