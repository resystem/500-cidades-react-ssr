import React from 'react';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input'
import Dropdown from '../../molecules/dropdown/dropdown';
import TextArea from '../../atoms/text-area/textArea';
import { Separator } from './landing.style';
import InputGroup from '../../molecules/input-group/inputGroup';

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
      <Dropdown placeholder="Texto" filled={true} />
    </Separator>
    <Separator>
      <Dropdown placeholder="Texto" error={true} />
    </Separator>
    <Separator>
      <Dropdown placeholder="Texto" />
      <TextArea placeholder="Texto"  rows={6}/>
    </Separator>
    <Separator>
      <TextArea placeholder="Texto" success={true} rows={6}/>
    </Separator>
    <Separator>
      <TextArea placeholder="Texto" error={true} rows={6}/>
    </Separator>
    <Separator>
      <InputGroup label="teste">
        <Input placeholder="Texto" filled={true} />
      </InputGroup>
    </Separator>
    <Separator>
      <InputGroup label="teste required" isRequired>
        <Input placeholder="Texto" filled={true} />
      </InputGroup>
    </Separator>
    <Separator>
      <InputGroup label="teste required with error" isRequired error="Teste de erro generico">
      <Input placeholder="Texto" error={true} />
      </InputGroup>
    </Separator>
  </Separator>
);

export default Landing;
