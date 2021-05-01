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
  object-fit: fill;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: block;
  color: #96638C;
  font-weight: 400;
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
`;

export const buttonCustomStyle = `
  padding: 8px 20px;
  font-weight: 700;
  width: 100px;
`;
