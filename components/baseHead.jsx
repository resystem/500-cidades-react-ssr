/* eslint-disable react/no-danger */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseHead = ({ description, keywords, title, imageUrl }) => (
  <Head>
    <title>{`${title} | 500 Cidades`}</title>
    <meta name="title" content={`${title} | 500 Cidades`} />
    <meta charSet="utf-8" />

    <meta
      name="keywords"
      content={[...keywords, title, '500 cidades', '500', 'cidade', 'midia ninja'].join(', ')}
    />
    <meta name="language" content="en-us" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content={description} />

    <meta name="image" content={imageUrl} />

    <meta property="og:title" content={`${title} | 500 Cidades`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <link rel="stylesheet" href="/css/reset.css" />
    <link rel="stylesheet" href="/css/fonts.css" />
    <link rel="stylesheet" href="/css/globals.css" />

    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`} />
  </Head>
);

BaseHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

BaseHead.defaultProps = {
  keywords: [],
  imageUrl: '',
  title: '',
  description: ''
};

export default BaseHead;
