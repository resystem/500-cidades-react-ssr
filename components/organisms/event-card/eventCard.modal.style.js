import styled from 'styled-components';
// import { black, secondary } from '../../../settings/colors';

// #96638C

export const Wrapper = styled.section`
  ${props => props.customStyle}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F7F2F6;
  border-radius: 8px;
  padding: 8px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 130px;
  border-radius: 8px 8px 0px 0px;
`;

export const Name = styled.label`
  display: block;
  margin: 8px 0;
  font-size: 0.75em;
`;

export const Area = styled.label`
  font-size: 0.75em;
  color: #96638C;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;

`;

export const Type = styled.label`
  font-size: 0.75em;
  font-family: 'Roboto', sans-serif;
`;

export const buttonCustomStyle = (isSubscribed) => `
  width: 100%;
  background-color: #FFF;
  margin-top: 20px;
  color: #4ACAC1;
  font-size: 0.75em;
  border: 2px solid #4ACAC1;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  ${isSubscribed ? 'background-color: #4ACAC1;' : ''}
  ${isSubscribed ? 'color: #FFF;' : ''}
  ${isSubscribed ? 'border: 1px solid #4ACAC1;' : ''}
`;
