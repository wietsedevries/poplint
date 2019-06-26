import React from 'react';
import PropTypes from 'prop-types';
import { Text, Anchor, Badge } from '../ui';
import { Option } from '.';

const ActiveItem = ({ rule }) => {
  const { description, options = {}, url, google, airBnb, standardJs, eslint } = rule;
  const isIncluded = [google, airBnb, standardJs, eslint].filter(Boolean).length;

  /**
   * Filter the extra option, so it doesn't
   * show in the options list.
   */
  const filterCondition = (_, index) => Object.keys(options)[index] !== 'extra';
  const filteredValues = Object.values(options).filter(filterCondition);
  const filteredKeys = Object.keys(options).filter(filterCondition);

  return (
    <>
      <Text type="h3">Description</Text>
      <Text>{description}</Text>
      <br />
      {!!filteredValues.length && (
        <>
          <Text type="h3">Options</Text>
          {filteredValues.map((option, i) => {
            const key = filteredKeys[i];
            return <Option key={key} title={key} {...option} />;
          })}
        </>
      )}
      <br />
      {!!isIncluded && (
        <>
          <Text type="h3">Included in:</Text>
          <div style={{ display: 'flex' }}>
            {!!eslint && (<Badge type="eslint" active label />)}
            {!!google && (<Badge type="google" active label />)}
            {!!airBnb && (<Badge type="airBnb" active label />)}
            {!!standardJs && (<Badge type="standardJs" active label />)}
          </div>
        </>
      )}
      <br />
      <Anchor
        rel="noopener noreferrer"
        target="_blank"
        href={url}
        font="tiny"
        colored
      >
        {url}
      </Anchor>
    </>
  );
};

ActiveItem.propTypes = {
  description: PropTypes.string,
  options: PropTypes.object,
  url: PropTypes.string,
  google: PropTypes.bool,
  airBnb: PropTypes.bool,
  standardJs: PropTypes.bool,
  eslint: PropTypes.bool,
  rule: PropTypes.object,
};

export default ActiveItem;
