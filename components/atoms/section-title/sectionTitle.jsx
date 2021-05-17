import React from 'react';
import PropTypes from 'prop-types'
import Title from './sectionTitle.style';

const SectionTitle = ({
  title
}) => (
  <Title>{title}</Title>
);

SectionTitle.propTypes = {
  title: PropTypes.string
};

export default SectionTitle;
