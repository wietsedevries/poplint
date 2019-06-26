import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const animation = (props) => {
  if (!props.spin) {
    return;
  }
  return css`${spin} 3s linear infinite`;
};

const Loader = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  display: block;
  animation: ${animation};
  border-top: 7px solid transparent;
  border-right: 7px solid ${props => props.theme.color.primary};
  border-bottom: 7px solid transparent;
  border-left: 7px solid ${props => props.theme.color.primary};
  border-radius: 50%;

`;

export default Loader;
