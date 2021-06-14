import styled from 'styled-components';
import {
  TagMedium,
  TagDark,
  primaryMedium,
  neutralColor2
} from '../../../style/colors';

export const TagListComponent = styled.div`
background: ${neutralColor2};
border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;
  width: 640px;
  height: 2em;
`;

export const TagsList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Tag = styled.li`
  align-items: center;
  background: ${TagMedium};
  border-radius: 2px;
  color: ${primaryMedium};
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
  :hover {
    background: ${TagDark};
  }
`;

export const TagRemove = styled.button`
  align-items: center;
  appearance: none;
  border: none;
  color: ${primaryMedium};
  background: ${TagMedium};
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  height: 15px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  padding: 0;
  transform: rotate(45deg);
  width: 15px;
  font-family: 'Roboto', sans-serif;
`;

export const TagsInput = styled.li`
  background: none;
  flex-grow: 1;
  padding: 0;
  font-family: 'Roboto', sans-serif;
`;

export const TagInput = styled.input`
  background: none;
  font-family: 'Roboto', sans-serif;

`;