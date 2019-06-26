import React from 'react';
import PropTypes from 'prop-types';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { RulesProvider } from '../utils/eslintRules';
import { defaultTheme } from '../ui/themes';
import { Header, Footer } from '../components';

class PopLint extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <RulesProvider>
        <ThemeProvider theme={defaultTheme}>
          <Container>
            <Header />
            <Component {...pageProps} style={{ minHeight: '80vh' }} />
            <Footer />
          </Container>
        </ThemeProvider>
      </RulesProvider>
    );
  }
}

PopLint.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default PopLint;
