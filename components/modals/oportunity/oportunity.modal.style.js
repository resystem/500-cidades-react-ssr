import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Container = styled.div`
  opacity: 1;
  padding: 20px;
  height: 100%;
  width: 600px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 16px;
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

export const OportunityImage = styled.img`
  width: 609px;
  height: 284px;
  margin: 1em 0;
`;

export const ShowMoreIcon = styled.img`
  width: 25px;
  margin-right: 10px;
  cursor: pointer;
  align-self: flex-end
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid #E9DDE6;
  margin: 32px 0;
  max-width: 400px;
`;

export const SectionTitle = styled.h4`
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 1.125em;
  ${props => props.customStyle}
`;

export const Description = styled.div`
  max-width: 400px;
`;

export const DescriptionText = styled.p`
  color: #96638C;
  font-size: 0.87em;
`;

export const SocialMedia = styled.img`
  margin-right: 26px;
  margin-top: 16px;
  cursor: pointer;
`;

export const SocialMediaContainer = styled.div`
`;

export const maxWidthCustomStyle =  `
  max-width: 400px;
`;