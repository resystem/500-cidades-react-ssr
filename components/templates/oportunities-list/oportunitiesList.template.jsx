import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  Wrapper,
  CardsContainer,
} from './oportunitiesList.style';
import EventCard from '../../organisms/event-card/eventCard';
import ExpantionCard from '../../organisms/expantion-card/expantionCard';


const renderCards = (cards) => (
  <CardsContainer>
    {
      cards.map((event) => (
        <EventCard
          imageUrl={'https://images.unsplash.com/photo-1568292342316-60aa3d36f4b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}
          date={'12 de agosto'}
          area={'Vivência'}
          type={'Dança circular'}
          customStyle="margin: 8px;" 
          isSubscribed={Math.random() > .5}
        />
      ))
    }
  </CardsContainer>
);

/**
 * render the OportunitiesList template.
 */
const OportunitiesList = ({
  oportunities, customStyle,
  owner,
}) => {
  const [expanded, setExpanded] = useState('');
  const [endeds, setEndeds] = useState([]);
  const [createdsBy, setCreatedBy] = useState([]);
  const [subscribeds, setSubscribeds] = useState([]);

  const handleShow = (id, active) => {
    const references = {
      ended: { value: endeds, set: (e) => setEndeds(e) },
      createdBy: { value: createdsBy, set: (e) => setCreatedBy(e) },
      subscribeds: { value: subscribeds, set: (e) => setSubscribeds(e) },
    }
    const keys = Object.keys(references);
    keys.map(key => {
      if (key !== id) references[key].set(false);
      else references[key].set(active);
    })
    setExpanded(id);
  };

  return (
    <Wrapper customStyle={customStyle}>
      <ExpantionCard
        id="endeds"
        show={expanded === 'endeds'}
        onChange={({id, active}) => handleShow(id, active)}
        title="Encerradas"
        content={renderCards([1,2,3,4,5,6,7])}
      />
      <ExpantionCard
        id="createdBy"
        show={expanded === 'createdBy'}
        onChange={({id, active}) => handleShow(id, active)}
        title={`Criadas por ${owner.name}`}
        content={renderCards([1,2])}
      />
      <ExpantionCard
        id="subscribeds"
        show={expanded === 'subscribeds'}
        onChange={({id, active}) => handleShow(id, active)}
        title={`${owner.name} se inscreveu`}
        content={renderCards([1,2,3])}
      />
    </Wrapper>
  );
}

OportunitiesList.propTypes = {
  events: PropTypes.array.isRequired,
  customStyle: PropTypes.string,
  owner: PropTypes.object.isRequired
};

OportunitiesList.defaultProps = {
  customStyle: '',
  owner: {
    name: 'Marielle'
  },
};

export default OportunitiesList;
