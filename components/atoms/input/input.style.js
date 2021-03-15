import styled from 'styled-components';
import {
  neutralColor2,
  neutralColor5,
  primaryMedium,
  alertSuccessLight,
  brandSecondaryLightest,
  brandTertiaryLight,
  brandTertiaryLightest
} from '../../../style/colors';

export const InputComponent = styled.input `
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
    if (props.success) {
      return `
        background: ${alertSuccessLight};
      `;
    }
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