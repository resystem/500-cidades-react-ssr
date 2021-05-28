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

export const Container = styled.div`
  width: 100%;
  position: relative;

`;

export const TextAreaComponent = styled.textarea`
  font-size: 1rem;
  padding: 11px 16px;
  border-radius: 5px;
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

export const Counter = styled.label`
  font-size: 0.75em;
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: #96638C;
`;