import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

const AnchorSpan = styled.span`
  a {
    text-decoration: ${props => (props.href || props.link) && 'underline'};
    font-size: ${props => (props.font ? props.theme.font[props.font] : 'inherit')};
    color: ${props => props.theme.color[props.colored ? 'primary' : 'inherit']};
    cursor:  ${props => (props.href || props.link) && 'pointer'};
    display: ${props => props.button && 'table'};
    padding: ${props => props.button && '12px 20px'};
    margin: ${props => props.button && '0 auto'};
    border-radius: ${props => props.theme.borderRadius};
    transition: .1s;

    &:hover {
      text-decoration: none;
      color: ${props => props.theme.color[(props.href || props.link) ? 'primary' : 'black']} !important;
      background-color: ${props => props.button && 'rgba(0,0,0,0.05)'};
    }
  }
`;

const Anchor = ({ href, children, ...props }) => (
  <AnchorSpan {...props}>
    <Link href={href || '#'}><a>{children}</a></Link>
  </AnchorSpan>
);

Anchor.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default Anchor;
