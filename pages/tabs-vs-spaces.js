import React from 'react';
import { RulesProvider, useRules } from '../utils/eslintRules';

import { Text } from '../ui';
import { Grid, Row, Col } from '../utils/grid';
import { PercentageGraph } from '../components';

const TabsSpaces = () => {
  const { rules } = useRules();
  const indentRule = rules.find(rule => rule.key === 'indent');
  const { spaces2, spaces4, tabs } = indentRule.options.extra.values;
  const total = (spaces2 + spaces4 + tabs);

  const data = [
    { label: 'Tabs', value: (tabs / total) * 100 },
    { label: '2 Spaces', value: (spaces2 / total) * 100 },
    { label: '4 Spaces', value: (spaces4 / total) * 100 },
  ];

  return (
    <RulesProvider>
      <Grid>
        <Row>
          <Col xs={12} lg={6} lgOffset={3}>
            <Text type="h1" align="center">
              Tabs vs. Spaces
            </Text>
            <Text align="center">
              {`
              Looking at the most popular javascript repositories,
              we can see which indetation is used most often.
              Let's end the debate once and for all.
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

export default TabsSpaces;
