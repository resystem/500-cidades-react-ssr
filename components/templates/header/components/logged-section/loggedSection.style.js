import styled from "styled-components";

export const UserSection = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  ${props => props.onClick ? 'cursor: pointer' : ''}
`;


export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
  margin-left: 10px;
  border: 2px solid #FFF;
  cursor: pointer;
`;

export const ProfileName = styled.label`
  color: #FFF;
  cursor: pointer;
`;

export const List = styled.ul`
  width: 190px;
  position: absolute;
  top: 42px;
  right: 10px;
  z-index: 10;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: #FFF;
  padding: 2px 0;
  overflow: hidden;
  ${props => props.show ? '' : 'display: none;'}
`;

export const ListItem = styled.li`
  width: 100%;
  color: #3B2737;
  font-size: .875em;
  padding: 4px 16px;
  line-height: 1.3125em;
  cursor: pointer;
  &:hover {
    background-color: #F7F2F6;
  }
`;
