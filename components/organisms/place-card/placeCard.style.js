import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${props => props.customStyle}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
`;

export const Image = styled.img`
  width: 136px;
  height: 94px;
  border-radius: 8px;
  object-fit: cover;
`;

export const Name = styled.label`
  display: block;
  font-weight: 700;
  color: black;
  font-size: 0.875em;
  font-family: 'Roboto', sans-serif;
`;

export const Location = styled.label`
  font-size: 0.75em;
  color: #96638C;
  font-family: 'Roboto', sans-serif;
`;
