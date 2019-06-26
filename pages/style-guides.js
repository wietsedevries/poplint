import React, { useState, useEffect } from 'react';
import { RulesProvider, useRules } from '../utils/eslintRules';

import { DataSet, Modal, ActiveItem } from '../components';
import { Text, Badge, Anchor } from '../ui';
import { Grid, Row, Col } from '../utils/grid';


const StyleGuides = () => {
  const { rules } = useRules();

  const [activeKey, setActiveKey] = useState();
  const [showModal, setShowModal] = useState();
  const renderModal = () => {
    if (!showModal) {
      return;
    }

    const activeItem = rules.find(rule => rule.key === activeKey);
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


  const headers = (full = false) => [
    '',
    full ? <><Badge type="eslint" active noMargin /></> : null,
    <><Badge type="google" active noMargin /></>,
    <><Badge type="airBnb" active noMargin /></>,
    <><Badge type="standardJs" active noMargin /></>,
  ].filter(v => v !== null);

  const [rows, setRows] = useState([]);
  const generateRows = () => {
    const applicableRules = rules.filter((rule) => {
      const { airBnb, eslint, google, standardJs } = rule;
      return [airBnb, eslint, google, standardJs].filter(Boolean).length;
    });
    const sortedRules = applicableRules.sort((a, b) => {
      const usageA = [a.google, a.eslint, a.airBnb, a.standardJs].filter(Boolean).length;
      const usageB = [b.google, b.eslint, b.airBnb, b.standardJs].filter(Boolean).length;
      return usageB - usageA;
    });
    const tableRow = [];
    for (let i = 0; i < sortedRules.length; i += 1) {
      const rule = sortedRules[i];
      tableRow.push([
        <Anchor onClick={toggleKey(rule.key)} link>{rule.key}</Anchor>,
        rule.eslint ? '✅' : '❌',
        rule.google ? '✅' : '❌',
        rule.airBnb ? '✅' : '❌',
        rule.standardJs ? '✅' : '❌',
      ]);
    }
    setRows(tableRow);
  };
  useEffect(generateRows, []);

  const [statRows, setStatRows] = useState([]);
  useEffect(() => {
    const packages = ['eslint-config-airbnb', 'standard', 'eslint-config-google'];
    const promises = [];
    packages.forEach((pkg) => {
      promises.push(fetch(`https://api.npms.io/v2/package/${pkg}`));
    });
    Promise.all(promises)
      .then(responses => Promise.all(responses.map(res => res.json()))).then((json) => {
        const google = json.find(v => v.collected.metadata.name === 'eslint-config-google');
        const airBnb = json.find(v => v.collected.metadata.name === 'eslint-config-airbnb');
        const standardJs = json.find(v => v.collected.metadata.name === 'standard');

        const getDelta = (oldValue, newValue) => {
          const delta = (((newValue - oldValue) / oldValue) * 100);
          return delta.toFixed();
        };

        const getData = (pkg) => {
          const { collected, score } = pkg;
          const { metadata, npm } = collected;
          return ({
            repo: metadata.links.homepage,
            downloads: npm.downloads[1].count,
            downloadDelta: getDelta((npm.downloads[2].count / 4), npm.downloads[1].count),
            maintenanceScore: (score.detail.maintenance * 100).toFixed(),
            popularityScore: (score.detail.popularity * 100).toFixed(),
            qualityScore: (score.detail.quality * 100).toFixed(),
            totalScore: (score.final * 100).toFixed(),
            dependentsCount: npm.dependentsCount,
            starsCount: npm.starsCount,
          });
        };

        const data = {
          google: getData(google),
          airBnb: getData(airBnb),
          standardJs: getData(standardJs),
        };

        const getDownloadLabel = (downloads, delta) => {
          const color = (delta > 0) ? 'green' : 'red';
          return (
            <>
              {downloads}
              <span style={{ color, paddingLeft: 3, fontSize: 11 }}>{delta}%</span>
            </>
          );
        };

        const { google: g, airBnb: a, standardJs: s } = data;
        setStatRows([
          ['⬇ Weekly downloads', getDownloadLabel(g.downloads, g.downloadDelta), getDownloadLabel(a.downloads, a.downloadDelta), getDownloadLabel(s.downloads, s.downloadDelta)],
          ['🔌 Dependent repos', g.dependentsCount, a.dependentsCount, s.dependentsCount],
          ['🌟 Weekly star count', g.starsCount, a.starsCount, s.starsCount],
          ['💯 Total npm score', `${g.totalScore}%`, `${a.totalScore}%`, `${s.totalScore}%`],
        ]);
      });
  }, []);

  return (
    <RulesProvider>
      <Grid>
        <Row>
          <Col xs={12} lg={8} lgOffset={2}>
            <Text type="h1" align="center">
              Javascript style guide comparison
            </Text>
            <Text align="center">
              {`
              Find out how the most popular javascirpt style guides compare to each other.
              `}
            </Text>
            {!!statRows.length && (
              <DataSet data={{ headers: headers(), rows: statRows }} src="https://npms.io" />
            )}
            <DataSet data={{ headers: headers(true), rows }} />
          </Col>
        </Row>
      </Grid>
      {renderModal()}
    </RulesProvider>
  );
};
export default StyleGuides;
