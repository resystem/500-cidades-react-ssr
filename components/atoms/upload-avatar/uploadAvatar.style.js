import styled from 'styled-components';

export const PreLoaderImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  opacity: ${(props) => (!props.src ? 0 : 1)};
  transition-property: opacity;
  transition-duration: 1s;
  transition-delay: 0.5s;
  font-family: 'Roboto', sans-serif;

  ${(props) => props.customStyle}
  ${(props) => props.type === 'square' ? 'border-radius: 8px;' : ''}
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
  ${(props) => props.type === 'square' ? 'border-radius: 8px;' : ''}
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Input = styled.input`
  display: none;
`;
