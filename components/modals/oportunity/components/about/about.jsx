import React from 'react';
import PropTypes from 'prop-types';
import {
  AboutWrapper,
  AboutContainer,
  OportunityDetails,
  Name,
  SubscribeButtonCustomStyle
} from './about.style';
import ContactInfo from '../../../../molecules/contact-info/contact';
import Button from '../../../../atoms/button/button';

const About =({
  name, datetime, link
}) => (
  <AboutWrapper>
    <AboutContainer>
      <OportunityDetails>
        <Name>{name}</Name>
      </OportunityDetails>

    </AboutContainer>
    <ContactInfo
      iconPath="/icons/watch_later.svg"
      text={datetime}
    />
    <ContactInfo
      iconPath="/icons/videocam.svg"
      text={link}
    />
    <Button customStyle={SubscribeButtonCustomStyle}>Inscrever-se</Button>
  </AboutWrapper>
);

About.propTypes = {
};

About.defaultProps = {
};

export default About;