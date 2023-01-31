import styled from 'styled-components';


export const Box = styled.div`
  font-family: sans-serif;
  text-align: center;
  line-height: 40vh;
  color: #FFF;

  position: fixed;
  top: ${props => props.top}vh;
  left: ${props => props.left}vw;
  width: 40vw;
  height: 40vh;
  background-color: ${props => props.color || 'red'};
  mix-blend-mode: ${props => props.blend};
  transition: transform 800ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(9);
  }
`;
