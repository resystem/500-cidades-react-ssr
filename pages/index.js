import React from 'react';
import BaseHead from '../components/baseHead';
import Landing from '../components/pages/landing/landing';
import '../components/I18n';


/**
 * This render the Home template.
 */
const Home = () => (
  <>
    <BaseHead />
    <Landing />
  </>
);

export default Home;
