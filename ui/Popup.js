import styled, { keyframes } from 'styled-components';

const Popup = styled.div`
  position: fixed;
  z-index: 9;
  height:100%;
  width:100%;
  left: 0;
  right: 0;
  overflow: scroll;
  display:table-cell;
  text-align:center;
  vertical-align:middle;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`;
Popup.Curtain = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height:100%;
  width:100%;
  opacity: 0;
  z-index: 1;
  background: rgba(0,0,0,.7);
  animation: ${fadeIn} 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`;
const scaleUp = keyframes`
  0% {
    transform:scale(.8) translateY(-250%);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(-30%);
    opacity:1;
  }
`;
Popup.Box = styled.div`
  transform:scale(.8) translateY(-1000px);
  opacity:0;
  box-sizing: border-box;
  background: #FFF;
  width: 400px;
  position: relative;
  display:inline-block;
  z-index: 1;
  text-align: left;
  border-radius: ${props => props.theme.borderRadius};
  top: 30%;
  animation: ${scaleUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  overflow: hidden;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    height: 100%;
    border-radius: 0;
  `}
`;
Popup.Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 ${props => props.theme.fn.spacing(4)};
  border-bottom: ${props => props.theme.fn.border()};
  height: 50px;
`;
Popup.Body = styled.div`
  padding: ${props => props.theme.fn.spacing(4)};
`;
Popup.Close = styled.div`
  width: 50px;
  border-left: ${props => props.theme.fn.border()};
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: ${props => props.theme.font.large};
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: ${props => props.theme.color.lightGrey};
  }
`;

export default Popup;
