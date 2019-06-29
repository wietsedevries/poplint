import React, { useState } from 'react';
import { RulesProvider, useRules } from '../utils/eslintRules';


import { Modal, ActiveItem, Paginator } from '../components';
import { ListItem, List, Text, Division, Badge } from '../ui';
import { Grid, Row, Col, Center } from '../utils/grid';

const Ranking = () => {
  const { rules } = useRules();
  const sortedRules = rules.sort((a, b) => b.error - a.error);
  const [limit, setLimit] = useState(15);
  const paginatedRules = sortedRules.slice(0, limit);
  const increaseLimit = (shouldIncrease) => {
    if (shouldIncrease) {
      setLimit(limit + 10);
    }
  };

  const [activeKey, setActiveKey] = useState();
  const [showModal, setShowModal] = useState();
  const renderModal = () => {
    if (!showModal) {
      return;
    }

    const activeItem = rules.find(rule => (rule.key === activeKey));
    return (
      <Modal
        title={activeKey}
        content={<ActiveItem rule={activeItem} />}
        close={() => setShowModal(false)}
        open={showModal}
      />
    );
  };

  const toggleKey = key => () => {
    setActiveKey(key);
    setShowModal(true);
  };

  const renderList = () => paginatedRules.map((rule, index) => {
    const { key, error, warn, off, category, eslint, google, standardJs, airBnb } = rule;

    return (
      <ListItem key={key} onClick={toggleKey(key)}>
        <ListItem.Head>
          <ListItem.Rank>{index + 1}</ListItem.Rank>
          <ListItem.HeadItem>
            <Text type="h2" color="darkGrey" margin={false}>
              {key}
            </Text>
            <Text type="h3" margin={false}>
              {category}
            </Text>
          </ListItem.HeadItem>
          <ListItem.HeadItem end>
            <Division off={off} warn={warn} error={error} />
            <span style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {Object.keys({ eslint, google, standardJs, airBnb }).map((guideKey, i) => {
                const isPresent = Object.values({ eslint, google, standardJs, airBnb })[i];
                return isPresent ? <Badge key={guideKey} type={guideKey} label /> : null;
              })}
            </span>

          </ListItem.HeadItem>
        </ListItem.Head>
      </ListItem>
    );
  });

  return (
    <RulesProvider>
      <Grid>
        <Center>
          <Row>
            <Col xs={12}>
              <Text type="h1" align="center">
                Popularity ranking of eslint rules
              </Text>
              <Text align="center">
                {`
                View which rules are used the most and how strict.
                `}
              </Text>
              <List>
                {renderList()}
                {(limit < rules.length) && (
                  <Paginator loadMore={increaseLimit} />
                )}
              </List>
            </Col>
          </Row>
          {renderModal()}
        </Center>
      </Grid>
    </RulesProvider>
  );
};
export default Ranking;
