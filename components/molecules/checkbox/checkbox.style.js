import styled from 'styled-components';
import { primaryMedium, brandSecondaryMedium, BrandPrimaryMedium, neutralColor5 } from '../../../style/colors';

export const CheckboxContainer = styled.div`
  width: 120px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;

  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${brandSecondaryMedium};
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Text = styled.label`
  color: ${BrandPrimaryMedium};
`;

export const StyledCheckbox = styled.label`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid;
  margin-right: 2px;
  :hover {
    background-color: ${neutralColor5};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  ${(props) => {
    if (props.checked) {
      return `
      background: ${primaryMedium};
    `;
    }
  }}
  ${(props) => props.customStyle}
`;
