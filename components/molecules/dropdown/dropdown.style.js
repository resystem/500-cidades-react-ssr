import styled from 'styled-components';
import {
  neutralColor2,
  primaryMedium,
  brandSecondaryLightest,
  brandTertiaryLight,
  brandTertiaryLightest,
  alertSuccessLight
} from '../../../style/colors';
import { white } from '../../../style/colors';


export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;

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
  width: 100%;
  color: ${primaryMedium};
  padding: 0 8px 0 0;
  background-color: #E7F8F7;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownArrow = styled.img`
`;

export const DropdownListContainer = styled.div`
  width: 100%;
  background-color: #F7F2F6;
  border-top: 1px solid;
  top: -3px;
  position: relative;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
`;

export const DropdownList = styled.ul`
  z-index: 100;
  padding: 0;
  margin: 0;
  background: ${brandSecondaryLightest};
  box-sizing: border-box;
  font-weight: 500;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    color: #3B2737;
    background-color: rgba(150,99,140, .2);
  }
`;

export const DropdownItem = styled.li `
  :active {
    background: ${primaryMedium};
  }
`;