import styled from 'styled-components';
import {
  neutralColor2,
  primaryMedium,
  brandSecondaryLightest,
  brandTertiaryLight,
  brandTertiaryLightest
} from '../../../style/colors';
import { white } from '../../../style/colors';


export const DropdownContainer = styled.div `
position: relative;

  width: 247px;
  height: 2em;
  font-size: 16px;
  color: ${primaryMedium};
  background: ${neutralColor2};

  padding: 0.2em;
  border-radius: 5px;
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

export const DropdownHeader = styled.div`
  width: 247px;
  color: ${primaryMedium};

  padding: 0.2em;
`;

export const DropdownArrow = styled.img`
  position: absolute;
  z-index: 0;
  right: 0;
`;

export const DropdownListContainer = styled.div`
  width: 247px;
`;

export const DropdownList = styled.ul`
z-index: 100;

  padding: 0;
  margin: 0;
  background: ${brandSecondaryLightest};
  box-sizing: border-box;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled.li`

  list-style: none;
  padding-bottom: 0.8em;
  &:hover {
    color: ${white};
    background-color: ${primaryMedium};
  }
`;

export const DropdownItem = styled.li `
  :active {
    background: ${primaryMedium};
  }
`;