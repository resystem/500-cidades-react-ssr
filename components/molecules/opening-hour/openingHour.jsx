import React from 'react';
import PropTypes from 'prop-types'
import {
  OpeningHourInfo,
  Weekday,
  OpeningHourTimebox
} from './openingHour.style';

const OpeningHour = ({
  weekday, timebox
}) => (
  <OpeningHourInfo>
    <Weekday>{weekday}</Weekday>
    <OpeningHourTimebox>{timebox}</OpeningHourTimebox>
  </OpeningHourInfo>
);

OpeningHour.propTypes = {
  weekday: PropTypes.string,
  timebox: PropTypes.string
};

OpeningHour.defaultProps = {
  weekday: 'Segunda-feira',
  timebox: '09:00 - 19:00'
};

export default OpeningHour;