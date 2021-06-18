import styled from "styled-components";

export const PinContainer = styled.div`
  background-color: transparent;
  border: none;
  /* display: flex;
  align-items: flex-end; */
  position: relative;
  z-index: 250;
  /* justify-content: flex-end; */
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
  width: 44px;
  height: 44px;
  object-fit: cover;
  margin-top: -18px;
  position: absolute;
  margin-left: -91px;
  z-index: 250;
  border-radius: 4px;
`;

