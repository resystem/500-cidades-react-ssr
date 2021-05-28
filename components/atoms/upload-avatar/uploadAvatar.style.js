import styled from 'styled-components';
// import { white30 } from '../../../settings/colors';

export const PreLoaderImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  opacity: ${(props) => (!props.src ? 0 : 1)};
  transition-property: opacity;
  transition-duration: 1s;
  transition-delay: 0.5s;

  ${(props) => props.customStyle}
`;

export const Uploader = styled.label`
  width: 150px;
  height: 150px;
  background-color: #E9DDE6;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: center;

  ${(props) => props.customStyle}
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Input = styled.input`
  display: none;
`;
