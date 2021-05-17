import React from 'react';
import PropTypes from 'prop-types'
import SectionTitle from '../../atoms/section-title/sectionTitle';
import OpeningHour from '../../molecules/opening-hour/openingHour';

const OpeningHours = ({
  openingHoursArray
}) =>  (
  <SectionTitle>Horário de funcionamento</SectionTitle>
  { openingHoursArray.map((openingHour, i) => (
    <OpeningHour key={i} weekday={openingHour.weekday} timebox={openingHour.timebox} />
  ))}
)

OpeningHours.propTypes = {
  openingHours: PropTypes.arrayOf(PropTypes.any)
}

export default OpeningHours;
