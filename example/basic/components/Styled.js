import styled from '../../../dist/react-sc'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #ffcdd2
`

export const Link = styled.a`
  color: #f48fb1;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 26px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-decoration: none;
  ${({ href }) => href && 'animation:  blink 2s infinite'};

  &:hover {
    color: white;
    font-size: 52px;
    animation: none;
  }

  &:active {
    font-size: 100px;
  }

  @keyframes blink {
    0% { opacity: .7 }
    50% { opacity: 1 }
    100% { opacity: .7 }
  }
`
