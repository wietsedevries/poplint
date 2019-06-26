import React from 'react';
import { Text, Division, OptionRow } from '../ui';

const Option = (option) => {
  const { title, warn, error, off } = option;

  return (
    <OptionRow>
      <Text color="black">{title}</Text>
      <Division error={error} warn={warn} off={off} />
    </OptionRow>
  );
};

export default Option;
