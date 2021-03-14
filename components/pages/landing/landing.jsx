import React from 'react';
import Button from '../../atoms/button/button';
import InputPassword from '../../atoms/input-password/inputPassword';
import Input from '../../atoms/input/input'
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
      <InputPassword customStyle="margin: 10px 0;" placeholder="Senha" error={true} />
      <InputPassword customStyle="margin: 10px 0;" placeholder="Senha" success={true} />
      <InputPassword customStyle="margin: 10px 0;" placeholder="Senha" filled={true} />
    </Separator>
  </Separator>
);

export default Landing;
