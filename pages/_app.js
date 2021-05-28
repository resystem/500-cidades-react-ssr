import React from 'react';
import App from 'next/app';
import Main from '../components/main/main';

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Main>
        <Component {...pageProps} />
      </Main>
    );
  }
}
