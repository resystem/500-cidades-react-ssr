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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;


export const Title = styled.h4`
  font-size: .98em;
  font-weight: 500;
`;

export const More = styled.a`
  color: #96638C;
  font-size: 0.85em;
  cursor: pointer;
  text-decoration: underline;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => convertColorsToGrid(props.columns)};
`;
