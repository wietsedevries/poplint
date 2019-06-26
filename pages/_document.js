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
