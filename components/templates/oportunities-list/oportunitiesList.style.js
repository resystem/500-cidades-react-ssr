import styled from "styled-components";

const convertColorsToGrid = (n) => {
  let str = '';
  for(let i = 0; i < n; i++) {
    str+= ' 1fr'
  }
  return str;
}

export const Wrapper = styled.section`
  width: 100%;
  max-width: 400px;
  ${props => props.customStyle}
`;


export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
