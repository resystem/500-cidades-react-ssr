import React from 'react';
import Button from '../../atoms/button/button';
import InputPassword from '../../atoms/input-password/inputPassword';
import InputCode from '../../atoms/input-code/inputCode';
import Input from '../../atoms/input/input'
import Dropdown from '../../molecules/dropdown/dropdown';
import ColectiveCard from '../../molecules/colective-card/colectiveCard';
import TextArea from '../../atoms/text-area/textArea';
import Checkbox from '../../molecules/checkbox/checkbox';
import InputTagList from '../../molecules/input-taglist/inputTaglist';
import { Separator } from './landing.style';
import ActivistModal from '../../modals/activist/activist.modal';
import OportunityModal from '../../modals/oportunity/oportunity.modal';
import PlaceCard from '../../organisms/place-card/placeCard';
import FloatIcon from '../../templates/float-icon/floatIcon.template';

/**
 * This render the Landing template.
 */
const Landing = () => (
  <Separator>
    <ActivistModal />
    <OportunityModal />
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
      <InputCode handleChange={() => ''} id="maninho" length={4} />
    </Separator>
    <Separator>
      <InputCode handleChange={() => ''} id="maninho0" length={4} filled={true} />
    </Separator>
    <Separator>
      <InputCode handleChange={() => ''} id="maninho1" length={4} success={true} />
    </Separator>
    <Separator>
      <InputCode handleChange={() => ''} id="maninho2" length={4} error={true} />
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
      <Checkbox>Instagram</Checkbox>
      <Checkbox>Facebook</Checkbox>
      <Checkbox>Linkedin</Checkbox>
    </Separator>
    <Separator>
      <InputTagList />
    </Separator>
    <Separator>
      <PlaceCard />
    </Separator>
    <FloatIcon />
    <ColectiveCard />
  </Separator>
);

export default Landing;
