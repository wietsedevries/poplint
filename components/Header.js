import React from 'react';
import { Logo } from '../ui';
import { Grid, Row, Col, Center } from '../utils/grid';

const Header = () => (
  <Grid>
    <Center>
      <Row>
        <Col xs={12}>
          <Logo />
        </Col>
      </Row>
    </Center>
  </Grid>
);

export default Header;
