import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Rules from '../scripts/output/guides.json';

const RulesContext = createContext();

export const RulesProvider = ({ children }) => {
  const [rules, setRules] = useState(Rules);

  const value = useMemo(() => ({
    rules,
    setRules,
  }), [rules]);

  return <RulesContext.Provider value={value}>{children}</RulesContext.Provider>;
};

RulesProvider.propTypes = { children: PropTypes.node };

export const useRules = () => useContext(RulesContext);
