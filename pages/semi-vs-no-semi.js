import React from 'react';
import { RulesProvider, useRules } from '../utils/eslintRules';

import { Text } from '../ui';
import { Grid, Row, Col } from '../utils/grid';
import { PercentageGraph } from '../components';

const Semi = () => {
  const { rules } = useRules();
  const indentRule = rules.find(rule => rule.key === 'semi');
  const { always, never } = indentRule.options.extra.values;
  const total = (always + never);

  const data = [
    { label: 'semi (Always)', value: (always / total) * 100 },
    { label: 'no-semi (Never)', value: (never / total) * 100 },
  ];

  return (
    <RulesProvider>
      <Grid>
        <Row>
          <Col xs={12} lg={6} lgOffset={3}>
            <Text type="h1" align="center">
              Semi vs. No-semi
            </Text>
            <Text align="center">
              {`
                Looking at the most popular javascript repositories,
                we can find out whether or not people are enforcing the use of semicolons.
              `}
              <br />
              <br />
            </Text>
            <PercentageGraph data={data} />
          </Col>
        </Row>
      </Grid>
    </RulesProvider>
  );
};
export default Semi;
