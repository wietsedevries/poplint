import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header1 = styled.h1`
  color: ${props => props.theme.color[props.color || 'darkGrey']};
  font-size: ${props => props.theme.font[props.font || 'jumbo']};
  padding: 0;
  margin: 0;
  font-weight: 500;
  margin-bottom: ${props => props.margin && props.theme.fn.spacing(4)};
  text-align: ${props => props.align};
`;

const Header2 = styled.h2`
  color: ${props => props.theme.color[props.color || 'darkGrey']};
  font-size: ${props => props.theme.font[props.font || 'large']};
  padding: 0;
  margin: 0;
  font-weight: 400;
  margin-bottom: ${props => props.margin && props.theme.fn.spacing(3)};
  text-align: ${props => props.align};
`;

const Header3 = styled.h3`
  color: ${props => props.theme.color[props.color || 'grey']};
  font-size: ${props => props.theme.font[props.font || 'tiny']};
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-weight: 600;
  margin-bottom: ${props => props.margin && props.theme.fn.spacing(2)};
  text-align: ${props => props.align};
`;

const Paragraph = styled.p`
  color: ${props => props.theme.color[props.color || 'darkGrey']};
  font-size: ${props => props.theme.font[props.font || 'small']};
  padding: 0;
  margin: 0 ${props => (props.align === 'center') && 'auto'};
  font-weight: 400;
  margin-bottom: ${props => (props.margin ? props.theme.fn.spacing(2) : 0)};
  text-align: ${props => props.align};
  max-width: 500px;
`;

const Text = ({ type, margin = true, ...props }) => {
  const map = {
    h1: Header1,
    h2: Header2,
    h3: Header3,
    p: Paragraph,
  };

  const Component = map[type || 'p'];
  return <Component margin={margin} {...props} />;
};

Text.propTypes = {
  type: PropTypes.string,
  margin: PropTypes.bool,
};

export default Text;
