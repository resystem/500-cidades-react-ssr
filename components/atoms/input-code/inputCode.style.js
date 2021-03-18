import styled from 'styled-components';
import {
  neutralColor2,
  neutralColor5,
  primaryMedium,
  alertSuccessLight,
  brandSecondaryLightest,
  brandTertiaryLightest,
  brandTertiaryLight
} from '../../../style/colors';

export const InputComponent = styled.input`
  width: 40px;
  height: 44px;
  font-size: 1.37em;
  padding: 0.2em;
  color: ${primaryMedium};
  text-align: center;
  margin: 0 4px;
  border-radius: 4px;
  background: ${neutralColor2};
  font-weight: 500;
  ::placeholder {
    color: ${neutralColor5};
  }
  :focus {
    padding: 0.2em;
    margin: 0 4px;
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

export const Icon = styled.img`
  width: 25px;
  margin-left: 5px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  padding: 5px 10px;
  color: ${primaryMedium};
  background-color: transparent;
  display: flex;
  align-items: center;
  ${props => props.customStyle}
`;