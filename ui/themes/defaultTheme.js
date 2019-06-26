import { css } from 'styled-components';

const general = {
  baseNumber: 6,
  borderRadius: '6px',
};

const color = {
  primary: '#FA7268',
  accent: '#2B59C3',
  black: '#333',
  grey: '#999',
  darkGrey: '#777',
  lightGrey: '#F2F2F2',
  border: '#D9D9D9',
  red: '#FA7268',
  orange: '#F2B880',
  yellow: '#FCDFA6',
};

const font = {
  tiny: '11px',
  small: '14px',
  regular: '17px',
  large: '21px',
  jumbo: '30px',
};

const sizes = {
  desktop: 1000,
  laptop: 900,
  tablet: 700,
};
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
     @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
     }
  `;
  return acc;
}, {});

const fn = {
  spacing: (n = 1) => `${general.baseNumber * n}px`,
  border: (colorName = 'border') => `1px solid ${color[colorName]}`,
};

const defaultTheme = {
  ...general,
  media,
  color,
  font,
  fn,
};

export default defaultTheme;
