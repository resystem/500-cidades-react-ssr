import React from 'react';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input'
import TextArea from '../../atoms/text_area/text_area';
import { Separator } from './landing.style';

/**
 * This render the Landing template.
 */
const Landing = () => (
  <Separator>
    <Separator>
      <Button loading customStyle="margin: 10px;" handleClick={() => console.log('FOOOI')}>
        loading
      </Button>
    </Separator>
    <Separator>
      <Button customStyle="margin: 10px;" handleClick={() => console.log('FOOOI')}>
        primary
      </Button>
    </Separator>
    <Separator>
      <Button type="secondary" customStyle="margin: 10px;" handleClick={() => console.log('FOOOI')}>
        secondary
      </Button>
    </Separator>
    <Separator>
      <Button type="tertiary" handleClick={() => console.log('FOOOI')}>
        tertiary
      </Button>
    </Separator>
    <Separator>
      <Button handleClick={() => console.log('FOOOI')} disabled>
        disabled
      </Button>
    </Separator>
    <Separator>
      <Input placeholder="Texto" />
    </Separator>
    <Separator>
      <Input placeholder="Texto" filled={true} />
    </Separator>
    <Separator>
      <Input placeholder="Texto" success={true} />
    </Separator>
    <Separator>
      <Input placeholder="Texto" error={true} />
    </Separator>
    <Separator>
      <TextArea placeholder="Texto"  rows={6}/>
    </Separator>
    <Separator>
      <TextArea placeholder="Texto" success={true} rows={6}/>
    </Separator>
    <Separator>
      <TextArea placeholder="Texto" error={true} rows={6}/>
    </Separator>
  </Separator>
);

export default Landing;
