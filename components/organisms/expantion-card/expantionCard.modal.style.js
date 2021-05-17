import styled from 'styled-components';
// import { black, secondary } from '../../../settings/colors';

// #96638C

export const Wrapper = styled.section`
  ${props => props.customStyle}
  border-bottom: 1px solid #E9DDE6;
  padding: 15px 0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  ${props => props.showContent ? '' : 'display: none;'}
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  color: ${props => props.showContent ? '#3B2737' : '#96638C'};
  font-size: 1.1em;
  font-weight: 700;
  cursor: pointer;
`;

export const Icon = styled.img`
  
`;