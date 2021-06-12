import React from 'react';
import PropTypes from 'prop-types'
import {
  ContactInfo,
  ContactIcon,
  ContactLabel,
} from './contact.style';

/**
 * render the Contact atom.
 */
const Contact = ({
  iconPath, text, hide
}) => {
  if (hide) return null;
  return (
    <ContactInfo>
      <ContactIcon src={iconPath} />
      <ContactLabel>{text}</ContactLabel>
    </ContactInfo>
  );
}

Contact.propTypes = {
};

Contact.defaultProps = {
};

export default Contact;
