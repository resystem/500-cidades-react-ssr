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
  font-size: 1rem;
  border-radius: 5px;
  padding: 11px 16px;
  color: ${primaryMedium};
  caret-color: ${primaryMedium};
  background-color: #E7F8F7;
  font-weight: 500;
  ::placeholder {
    color: ${neutralColor5};
  }
  :focus {
    padding: 11px 16px;
  }
  :valid {
     background-color: ${brandSecondaryLightest}
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