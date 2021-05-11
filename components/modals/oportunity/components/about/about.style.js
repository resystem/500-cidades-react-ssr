import styled from 'styled-components';
import { black, secondary } from '../../../../../settings/colors';

export const AboutWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const OportunityDetails = styled.div`
`;

export const Name = styled.label`
  display: block;
  color: ${black};
  font-weight: bold;
  font-size: 2.625em;
  padding-bottom: 8px;
  line-height: 1.125em;
`;

export const SubscribeButtonCustomStyle = `
  color: ${black};
  background-color: #FFD503;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5em;
`