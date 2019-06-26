import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from '../ui';

const PercentageGraph = ({ data }) => {
  const color = (index) => {
    const map = {
      0: '#2B59C3',
      1: '#BDD358',
      2: '#59CD90',
      3: '#E5E059',
      4: '#FA7268',
    };
    return map[index];
  };

  return (
    <Bar>
      {data.map(({ label, value }, index) => (
        <Bar.Item
          key={label}
          value={value.toFixed(1)}
          label={label}
          style={{ backgroundColor: color(index) }}
        />
      ))}
    </Bar>
  );
};

PercentageGraph.propTypes = { data: PropTypes.object };

export default PercentageGraph;
