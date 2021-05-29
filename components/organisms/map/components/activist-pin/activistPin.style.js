import styled from "styled-components";

export const PinContainer = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  z-index: 250;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  z-index: 250;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.image`
  width: 45px;
  height: 45px;
  object-fit: cover;
  margin-left: -94px;
  margin-top: -16px;
  z-index: 250;
  border-radius: 100%;
`;

