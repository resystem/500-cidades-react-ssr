import styled from 'styled-components';
// import { black, secondary } from '../../../settings/colors';

// #96638C

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 600px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

export const Container = styled.div`
  opacity: 1;
  height: calc(100vh - 56px);
  width: 100%;
  max-width: 600px;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  background-color: #FFF;
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
  font-family: 'Roboto', sans-serif;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h4`
  font-weight: 700;
  margin-top: 16px;
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
