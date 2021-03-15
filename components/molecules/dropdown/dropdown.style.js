import styled from 'styled-components';
import {
  neutralColor2,
  neutralColor5,
  primaryMedium,
  brandSecondaryLightest,
  brandTertiaryLight,
  brandTertiaryLightest
} from '../../../style/colors';

export const DropdownComponent = styled.select `
  width: 247px;
  height: 2em;
  font-size: 16px;
  padding: 0.2em;
  border-radius: 5px;
  color: ${primaryMedium};
  caret-color: ${primaryMedium};
  background: ${neutralColor2};
  font-weight: 500;
  ::placeholder {
    color: ${neutralColor5};
  }
  :focus {
    padding: 0.2em;
  }
  :valid {
    backgroung: ${brandSecondaryLightest}
  }
  ${(props) => {
    if (props.error) {
      return `
        background: ${brandTertiaryLightest};
        border: ${brandTertiaryLight};
        border-style: solid;
        border-width: 1px;
      `;
    }
    if (props.filled) {
      return `
        background: ${brandSecondaryLightest};
      `;
    }
  }}
  ${props => props.customStyle}
`;

export const DropdownItem = styled.option `
  :active {
    background: ${primaryMedium};
  }
`;