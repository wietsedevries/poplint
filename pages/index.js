import React from 'react';
import { RulesProvider } from '../utils/eslintRules';
import { Text, Anchor } from '../ui';
import { Grid, Row, Col, Center } from '../utils/grid';


const Home = () => (
  <RulesProvider>
    <Grid>
      <Center>
        <Row>
          <Col xs={12}>
            <Text type="h1" align="center">
                The current state of javascript conventions
            </Text>
            <Text align="center">
              {`
                The javascript community is still very divided on conventions,
                but at least we can agree that we need atleast some rules to bring
                order to the chaos.
              `}
              <br />
              <br />
              {`
                Find out what rules we actually use.
              `}
            </Text>
            <div style={{ textAlign: 'center' }}>
              <Anchor href="/ranking" colored button>Popularity ranking of eslint rules</Anchor>
              <Anchor href="/tabs-vs-spaces" colored button>Indentation: tabs vs spaces</Anchor>
              <Anchor href="/semi-vs-no-semi" colored button>Semicolon: semi vs no-semi</Anchor>
              <Anchor href="/style-guides" colored button>Javascript guide comparison</Anchor>
              <br />
              <br />
              <Text type="h2">
                <Anchor href="/" colored button>How it works</Anchor>
              </Text>
            </div>
          </Col>
        </Row>
      </Center>
    </Grid>
  </RulesProvider>
);

export default Home;
