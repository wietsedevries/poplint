import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: ${props => props.theme.fn.spacing(2)};
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  background-color: ${props => !!props.nada && props.theme.color.lightGrey};
`;

const Unit = styled.div`
  display: ${props => !props.share && 'none'};
  width: ${props => `${props.share}%`};
  background-color: ${props => props.theme.color[props.color]};
  line-height: ${props => props.theme.fn.spacing(2)};
  border-radius: ${props => props.theme.borderRadius};
  margin-left: 3px;
  font-size: 10px;
  color: ${props => props.theme.color.darkGrey};
  box-sizing: border-box;
  position: relative;
  border: ${props => !!props.share && '1px solid transparent'};

  &:after {
    content: ${props => !!props.share && `"${props.label}"`};
    opacity: 0;
    transition: .1s;
    display: block;
    top: -16px;
    line-height: 16px;
    position: absolute;
    width: 100px;
    text-align: center;
    transform: translateX(-50%);
    left: 50%;
    pointer-events: none;
    height: 0;
    white-space: nowrap;
  }

  &:hover {

    border-color: rgba(0,0,0,0.2);
    &:after {
      opacity: 1;
    }

  }
  @media (max-width: 768px) {
    &:after {
      opacity: 1;
    }
  }
`;

const Division = ({ error = 0, warn = 0, off = 0 }) => {
  const reducer = (accumulator, current) => accumulator + current;
  const total = [error, warn, off].reduce(reducer);
  const nada = !error && !warn && !off;
  const units = [
    { id: 'off', color: 'yellow', share: (off / total) * 100 || 0 },
    { id: 'warn', color: 'orange', share: (warn / total) * 100 || 0 },
    { id: 'error', color: 'red', share: (error / total) * 100 || 0 },
  ];

  return (
    <Wrapper nada={nada}>
      {units.map((unit) => {
        const { id, color, share } = unit;
        return (
          <Unit key={id} share={share} color={color} label={`${id}: ${share.toFixed(0)}%`} />
        );
      })}
    </Wrapper>
  );
};

Division.propTypes = {
  error: PropTypes.number,
  warn: PropTypes.number,
  off: PropTypes.number,
};

export default Division;
