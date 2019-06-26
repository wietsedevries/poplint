import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  background-color: ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.borderRadius};
  border: 0;
  outline: 0;
  color: #FFF;
  line-height: 48px;
  padding: 0 ${props => props.theme.fn.spacing(4)};
  font-size: ${props => props.theme.font.regular};
  margin-bottom: 12px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.1);
    transform: scale(0) translate(-50%, -50%);
    transition: transform .2s linear, opacity .2s linear;
    transform-origin: top left;
    z-index: -1;
    opacity: 0;
  }

  &:hover {
    &:before {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%);
    }
  }
  &:active {
    &:before {
      background-color: rgba(0,0,0,0.2);
    }
  }
`;

export default Button;
