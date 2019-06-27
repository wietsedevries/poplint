import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <>
            <title>popLint</title>
            <meta
              name="description"
              content="The current state of javascript conventions"
              key="desc"
            />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            <link rel="manifest" href="/static/site.webmanifest" />
            <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#f37269" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            <meta name="apple-mobile-web-app-title" content="popLint" key="title" />
            <meta name="application-name" content="popLint" key="name" />
            <meta name="msapplication-TileColor" content="#f37269" key="tile" />
            <meta name="msapplication-config" content="/static/browserconfig.xml" key="config" />
            <meta name="theme-color" content="#f37269" key="theme" />
          </>
          <style>
            {`body {
                margin: 0;
                font-family: sans-serif;
            }`}
          </style>
        </Head>
        <body className="custom_class">
          <div id="modal-root" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
