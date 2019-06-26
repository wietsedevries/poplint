import styled from 'styled-components';

const Table = styled.div`
  border: ${props => props.theme.fn.border()};
  margin: 20px auto 35px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: #FFF;
  color: ${props => props.theme.color.darkGrey};
  overflow: ${props => (props.overflow ? 'scroll' : 'hidden')};
  display: grid;
  max-width: 100%;

  table {
    border-spacing: 0;
  }
`;

Table.Tr = styled.tr`
  text-align: left;

  &:hover td {
    background-color: ${props => props.theme.color.lightGrey};
  }
`;

Table.Th = styled.th`
  font-weight: 500;
  font-size: ${props => props.theme.font.regular};
  border-bottom: ${props => props.theme.fn.border()};
  padding: ${props => props.theme.fn.spacing()};
  color: ${props => props.theme.color.black};
  transition: .1s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 85px;

  &:first-of-type {
    padding-left: ${props => props.theme.fn.spacing(2)};
    max-width: 25%;
  }
`;

Table.Td = styled.td`
  padding: ${props => props.theme.fn.spacing()};
  font-size: ${props => props.theme.font.small};
  border-bottom: ${props => props.theme.fn.border('lightGrey')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:first-of-type {
    color: ${props => props.horizontal && props.theme.color.black};
    font-weight: ${props => props.horizontal && 500};
    padding-left: ${props => props.theme.fn.spacing(2)};
  }
`;

Table.Source = styled.div`
  text-align: right;
  color: ${props => props.theme.color.grey};
  font-size: ${props => props.theme.font.tiny};
  padding: ${props => props.theme.fn.spacing()} ${props => props.theme.fn.spacing(2)};
`;

export default Table;
