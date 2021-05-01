import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 24px;
  ${props => props.customStyle}
`;

export const FloatIconContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: #FFF;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
  border-radius: 100%;
  border: 4px solid #F7F2F6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  margin: 8px;
  ${props => props.customStyle}
  ${props => props.showList ? 'background-color: #96638C;' : ''}
`;

export const Icon = styled.img`
`;

export const ItemIcon = styled.img`
  width: 25px;
  margin-right: 8px;
`;

export const ListWrapper = styled.div`
  background-color: #FFF;
  width: 300px;
  height: 450px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  ${(props) => props.showList ? '' : 'display: none;'}
`;


export const buttoonCustomStyleHightlight = `
  padding: 16px 24px;
  margin: 8px 0 16px;  
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const buttoonCustomStyle = `
  padding: 16px 24px;
  margin: 8px 0;  
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const buttoonCustomPlaceStyle = `
  padding: 16px 24px;
  margin: 16px 0;  
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #E9DDE6;
`;