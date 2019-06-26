import styled from 'styled-components';

const List = styled.div`
  border: ${props => props.theme.fn.border()};
  border-radius: ${props => props.theme.borderRadius};
  background-color: #FFF;
`;

export default List;
