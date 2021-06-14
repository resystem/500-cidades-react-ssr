import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Container = styled.div`
  opacity: 1;
  padding: 20px;
  height: 100vh;
  width: 600px;
  @media(max-width: 768px) {
    width: 100%;
  }
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
`;

export const MenuIcon = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  color: #3B2737;
  font-size: 1.3em;
  font-weight: 700;
`;

export const List = styled.div`
  width: 100%;
  padding: ${props => props.isOportunity ? '40px 20px' : '40px 100px'};
`;

export const Card = styled.div`
  padding: 16px 0;
  @media(min-width: 768px) {
    border-bottom: 1px solid #E9DDE6;
  }
`;