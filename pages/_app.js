import React from 'react';
import App from 'next/app';
import { StoreProvider } from '../store/Store';

export default class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const {Component,pageProps}=this.props;
    return (
      <StoreProvider>
          <Component {...pageProps} />
      </StoreProvider>
    );
  }
}
