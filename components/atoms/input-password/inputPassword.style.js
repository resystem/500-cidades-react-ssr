import styled from 'styled-components';
import {
  neutralColor2,
  neutralColor5,
  primaryMedium,
  alertSuccessLight,
  brandSecondaryLightest,
  brandTertiaryLightest
} from '../../../style/colors';

export const InputComponent = styled.input `
  height: 2em;
  width: 100%;
  font-size: 16px;
  padding: 0.2em;
  color: ${primaryMedium};
  background-color: transparent !important;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  ::placeholder {
    color: ${neutralColor5};
    font-family: 'Roboto', sans-serif;
  }
  
  :focus {
    padding: 0.2em;
  }
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
  background-color: ${(props) => {
    if (props.error) return brandTertiaryLightest;
    if (props.success) return alertSuccessLight;
    if (props.filled) return brandSecondaryLightest;
    return neutralColor2;
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
  :focus {
    padding: 0.2em;
  }
  :valid {
    background-color: ${brandSecondaryLightest}
  }
  ${(props) => props.error ? 'border: 1px solid #EE9B9B;' : ''}
  ${props => props.customStyle}
`;
