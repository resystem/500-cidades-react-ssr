import styled from 'styled-components';
// import { black, secondary } from '../../../settings/colors';

// #96638C

export const Wrapper = styled.section`
  height: 100vh;
  /* width: 100vw; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
  opacity: 1;
  padding: 20px;
  height: 100%;
  width: 100%;
  max-width: 600px;
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

export const Header = styled.header`
  display: flex;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
`;

export const MenuIcon = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 0.875em;
  font-family: 'Roboto', sans-serif;
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 1.375em;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h4`
  font-weight: 700;
  margin-top: 32px;
  font-size: 1.125em;
  font-family: 'Roboto', sans-serif;
`;

export const Required = styled.span`
  color: red;
  font-family: 'Roboto', sans-serif;
`;

export const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding:  0 50px;
  padding-top: 20px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #E9DDE6;
  margin: 30px 0;
`;

export const inputCustomStyle = `
  margin: 22px 0 32px;
`;
