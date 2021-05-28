import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #3B2737;
  width: 100%;
  height: 50px;
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  ${props => props.customStyle}
`;

export const Logo = styled.img`
  max-height: 35px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;

export const UserSection = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  ${props => props.onClick ? 'cursor: pointer' : ''}
`;

export const loginButtonCustomStyle = `
  background-color: #FFD503;
  border-color: #FFD503;
  color: #3B2737;
  font-weight: 600;
  front-size: 1em;
  cursor: pointer;
`;

export const signinButtonCustomStyle = `
  border: 1px solid #FFF;
  color: #FFF;
  margin-left: 16px;
  font-weight: 600;
  front-size: 1em;
  cursor: pointer;
`;

export const List = styled.ul`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Item = styled.li`
  margin: 0 16px;
  padding: 4px;
  font-weight: 300;
  cursor: pointer;
  ${props => props.isSelected ? 'border-bottom: 2px solid #96638C;' : ''}
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 10px;
  border: 2px solid #FFF;
`;

export const ProfileName = styled.label`
  color: #FFF
`;
