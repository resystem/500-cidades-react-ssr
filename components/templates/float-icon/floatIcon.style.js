import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
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
`;

export const Icon = styled.img`
`;

export const ListWrapper = styled.div`
  background-color: #FFF;
  width: 300px;
  height: 400px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
`;
