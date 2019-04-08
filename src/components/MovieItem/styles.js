import styled from 'styled-components';
import { colors } from '../../styles';

export const MovieCard = styled.div`
  position: relative;
  background: ${colors.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    text-align: center;
    font-size: 1em;
    font-weight: 400;
    color: ${colors.regular};
  }

  a {
    text-decoration: none;
  }

  span {
    position: absolute;
    top: 12px;
    left: 10px;
    font-weight: 600;
    color: ${colors.white};
    z-index: 99;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  min-height: 340px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    pointer-events: none;
    z-index: 99;
    background: linear-gradient(
      to bottom,
      ${colors.darkTransparent} 0%,
      ${colors.transparent} 100%
    );
  }

  img {
    position: absolute;
    max-width: 100%;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
