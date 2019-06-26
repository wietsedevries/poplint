import styled from 'styled-components';

const Bar = styled.div`
  border-bottom: ${props => props.theme.fn.border()};
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 50px 0 0;
`;

Bar.Item = styled.div`
  width: 40px;
  position: relative;
  min-height: 3px;
  border-top-left-radius: ${props => props.theme.borderRadius};
  border-top-right-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.color};
  height: ${props => `${props.value}%`};

  &:before {
    content: ${props => `"${props.value}%"`};
    display: block;
    position: absolute;
    color: ${props => props.theme.color.darkGrey};
    left: 50%;
    transform: translateX(-50%);
    top: -25px;
    white-space: nowrap;
  }

  &:after {
    content: ${props => `"${props.label}"`};
    display: block;
    position: absolute;
    color: ${props => props.theme.color.darkGrey};
    left: 50%;
    transform: translateX(-50%);
    bottom: -25px;
    white-space: nowrap;
  }
`;

export default Bar;
