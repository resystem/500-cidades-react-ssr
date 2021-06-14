import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 128px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #96638C;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  padding: 0 50px;
`;


export const customStyleCancelButton = `
  width:100%;
  margin-right: 10px;
  background-color: #FFF;
  border: 2px solid #4ACAC1;
  font-weight: 500;
  color: #4ACAC1;
`;

export const customStyleSaveButton = `
  width:100%;
  margin-left: 10px;
  border-radius: 4px;
  color: #FFF;
  cursor: pointer;
  background-color: #FFD503;
  border-color: #FFD503;
  color: #3B2737;
  font-weight: 500;
  font-size: 1em;
  cursor: pointer;
`;