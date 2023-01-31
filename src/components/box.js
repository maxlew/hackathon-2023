import styled from 'styled-components';


export const Box = styled.div`
  position: fixed;
  top: ${props => props.top}vh;
  left: ${props => props.left}vw;
  width: 30vw;
  height: 30vh;
  background-color: ${props => props.color || 'red'};
  mix-blend-mode: multiply;
  transition: transform 800ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
