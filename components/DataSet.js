import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Table, Anchor } from '../ui';

const DataSet = ({ data, src }) => {
  const tableRef = useRef();
  const rowRef = useRef();
  const [overflow, setOverflow] = useState(false);
  useEffect(() => {
    if (tableRef.current.clientWidth < rowRef.current.clientWidth) {
      setOverflow(true);
    }
  }, [data]);

  const horizontalTable = data.headers[0] === '';

  return (
    <Table ref={tableRef} overflow={overflow}>
      <table>
        <thead>
          <Table.Tr ref={rowRef}>
            {data.headers.map((header, index) => (
              <Table.Th key={index}>{header}</Table.Th>
            ))}
          </Table.Tr>
        </thead>
        <tbody>
          {data.rows.map((row = [], index) => (
            <Table.Tr key={index}>
              {row.map((value, i) => (
                <Table.Td key={i} horizontal={horizontalTable}>{value}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </tbody>
      </table>
      {!!src && (
        <Table.Source>
          Source: <Anchor href={src} blank colored>{src}</Anchor>
        </Table.Source>
      )}
    </Table>
  );
};

DataSet.propTypes = {
  data: PropTypes.object,
  src: PropTypes.string,
};

export default DataSet;
