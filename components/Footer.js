import React from 'react';
import { Grid, Row, Col, Center } from '../utils/grid';
import { FooterBar, Anchor, Logo } from '../ui';

const Footer = () => (
  <FooterBar>
    <Grid>
      <Center>
        <Row>
          <Col xs={12}>
            <div style={{ textAlign: 'center' }}>
              <Anchor href="/ranking" colored button>Popularity ranking of eslint rules</Anchor>
              <Anchor href="/tabs-vs-spaces" colored button>Indentation: tabs vs spaces</Anchor>
              <Anchor href="/semi-vs-no-semi" colored button>Semicolon: semi vs no-semi</Anchor>
              <Anchor href="/style-guides" colored button>Javascript guide comparison</Anchor>
              <br />
              <br />
            </div>
            <Logo small />
          </Col>
        </Row>
      </Center>
    </Grid>
  </FooterBar>
);
export default Footer;
