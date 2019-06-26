import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ small }) => (
  <Link href="/">
    <img
      src="../static/poplint.svg"
      alt="popLint"
      style={{
        margin: '40px auto 20px',
        display: 'table',
        maxWidth: '70vw',
        cursor: 'pointer',
        height: (small ? 40 : 80),
      }}
    />
  </Link>
);

Logo.propTypes = { small: PropTypes.bool };

export default Logo;
