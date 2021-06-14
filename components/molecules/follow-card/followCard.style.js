import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 88px;
  height: 94px;
  margin-right: 10px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 8px;
  ${props => props.isHorizontalPhoto ? 'width: 136px;' : ''}
  ${props => props.hasBorderRadius ? `
    border-radius: 100%;
    width: 94px;
    height: 94px;
  ` : ''}
`;

export const Label = styled.label`
  display: block;
  color: #96638C;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 8px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  display: block;
  color: #3B2737;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`;

export const buttonCustomStyle = `
  padding: 8px 20px;
  font-weight: 700;
  width: 100px;
`;
