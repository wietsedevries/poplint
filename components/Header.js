import React from 'react';
import { Logo } from '../ui';
import { Grid, Row, Col } from '../utils/grid';

const Header = () => (
  <Grid>
    <Row>
      <Col xs={12} lg={6} lgOffset={3}>
        <Logo />
      </Col>
    </Row>
  </Grid>
);

export default Header;
