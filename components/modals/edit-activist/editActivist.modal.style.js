import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  max-width: 600px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  margin-top: 50px;
`;

export const Container = styled.div`
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
  background-color: #FFF;
`;

export const MenuIcon = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

export const PageTitle = styled.h2`
  font-weight: 700;
  font-size: 1.375em;
  font-family: 'Roboto', sans-serif;
`;