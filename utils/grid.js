import React from 'react';
import PropTypes from 'prop-types';
import { Container as DepGrid, Row as DepRow, Col as DepCol } from 'react-grid-system';

export const Grid = ({ children, ...props }) => <DepGrid {...props}>{children}</DepGrid>;
Grid.propTypes = { children: PropTypes.node };

export const Row = ({ children, ...props }) => <DepRow {...props}>{children}</DepRow>;
Row.propTypes = { children: PropTypes.node };

export const Col = ({ children, ...props }) => <DepCol {...props}>{children}</DepCol>;
Col.propTypes = { children: PropTypes.node };

export const Center = ({ children }) => <div style={{ width: '100%', maxWidth: '565px', margin: '0 auto' }}>{children}</div>;
Center.propTypes = { children: PropTypes.node };
