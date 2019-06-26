import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BadgeWrapper = styled.div`
  width: 18px;
  height: 18px;
  margin: ${props => (props.noMargin ? '0' : `${props.theme.fn.spacing()} 0 0 ${props.theme.fn.spacing()}`)};
  background-color: ${props => !props.type && props.theme.color.lightGrey};
  border-radius: ${props => !props.type && '50%'};
  background-image: url('../static/guides.png');
  background-size: 400%;
  background-position-x: ${props => `-${props.position}px`};
  background-position-y: ${props => (props.active ? '-18px' : 0)};
  position: relative;
  opacity: ${props => (props.active ? 1 : 0.6)};
  transition: opacity .1s;

  &:after {
    content: ${props => props.label && `"${props.type}"`};
    opacity: ${props => (props.large ? 1 : 0)};
    transition: .1s;
    display: block;
    bottom: ${props => (props.large ? '-20px' : 0)};
    line-height: 16px;
    position: absolute;
    width: 100px;
    text-align: ${props => !props.large && 'center'};
    transform: ${props => !props.large && 'translateX(-50%)'};
    left: ${props => (props.large ? 0 : '50%')};
    pointer-events: none;
    height: ${props => !props.large && 0};
    white-space: nowrap;
    font-size: ${props => (props.large ? props.theme.font.regular : '10px')};
    color: ${props => props.theme.color.darkGrey};
  }

  &:hover {
    background-position-y: -18px;
    opacity: 1;

    &:after {
      opacity: 1;
    }
  }
`;

const Badge = ({ type, size = 18, ...props }) => {
  const map = {
    eslint: { index: 0, url: 'https://github.com/eslint/eslint' },
    google: { index: 1, url: 'https://github.com/google/styleguide' },
    standardJs: { index: 2, url: 'https://github.com/standard/standard' },
    airBnb: { index: 3, url: 'https://github.com/airbnb/javascript' },
  };

  const redirect = () => {
    window.location.href = map[type].url;
  };

  return (
    <BadgeWrapper
      onClick={redirect}
      position={map[type].index * size}
      type={type}
      {...props}
    />
  );
};

Badge.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
};

export default Badge;
