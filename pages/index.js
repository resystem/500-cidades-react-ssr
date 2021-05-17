import React from 'react';
import BaseHead from '../components/baseHead';
// import Landing from '../components/pages/landing/landing';
import '../components/I18n';
import Sandbox from '../components/pages/sandbox/sandbox';


/**
 * This render the Home template.
 */
const Home = () => (
  <>
    <BaseHead />
    <Sandbox />
  </>
);

export default Home;
