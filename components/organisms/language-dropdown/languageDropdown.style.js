import styled from "styled-components";

export const LanguageButton = styled.button`
  width: 50px;
  height: 35px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  position: relative;
`;

export const CurrentLanguageIcon = styled.img`
  max-height: 40px;
  border: 2px solid #FFF;
  border-radius: 100%;
  margin-right: 8px;
`;

export const LanguageIcon = styled.img`
  max-height: 40px;
  border: 2px solid #FFF;
  border-radius: 100%;
  margin-right: 8px;
  padding: 2px;
  ${props => props.isSelected ? 'border: 2px solid #FFD503;' : ''}
`;

export const DropDownIcon = styled.img`
  max-height: 32px;
`;

export const LanguagesList = styled.ul`
  position: absolute;
  top: 100%;
  z-index: 2;
  left: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 16px 0;
  background-color: #fff;
  width: 150px;
  ${
    props => (props.show ? '' : 'display: none;')
  }
`;

export const LanguageItem = styled.li`
  display: flex;
  padding: 2px 24px;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #F7F2F6;
  }
  * {
    cursor: pointer;
  }

`;

export const LanguageText = styled.label`
  background-color: transparent;
`;