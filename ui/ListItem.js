import styled from 'styled-components';

const ListItem = styled.div`
  font-family: sans-serif;
  border-bottom: ${props => props.theme.fn.border()};
  transition: .1s;

  &:hover {
    background: linear-gradient(to right,  rgba(242,242,242,0.65) 0%,rgba(0,0,0,0) 100%);
  }
`;

ListItem.Head = styled.div`
  cursor: pointer;
  padding: ${props => `0 ${props.theme.fn.spacing(3)}`};
  line-height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    border-bottom: ${props => props.theme.fn.border(props.theme.color.lightGrey)};
    bottom: -1px;
    position: absolute;
    z-index: -1;
    left: 0;
    width: 100%;
  }
`;

ListItem.Rank = styled.div`
  font-size: ${props => props.theme.font.tiny};
  border-right: ${props => props.theme.fn.border()};
  border-bottom: ${props => props.theme.fn.border()};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  line-height: 14px;
  padding: 0 6px;
  color: ${props => props.theme.color.grey};
  position: absolute;
  top: 0;
  left: 0;
`;

ListItem.HeadItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => !!props.end && 'flex-end'};
  padding: 12px 0;

  h2 {
    line-height: ${props => props.theme.font.jumbo};
  }
  h3 {
    line-height: ${props => props.theme.font.small};
  }
`;

ListItem.Body = styled.div`
  height: ${props => (props.open ? 'auto' : 0)};
  overflow: hidden;
`;

ListItem.Content = styled.div`
  padding: ${props => `${props.theme.fn.spacing(2)} ${props.theme.fn.spacing(3)}`};
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(-10px)')};
  opacity: ${props => (props.open ? 1 : 0)};
  transition: .2s ease-out;
`;

export default ListItem;
