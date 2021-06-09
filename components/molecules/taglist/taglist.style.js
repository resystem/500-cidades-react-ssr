import styled from 'styled-components';
import {
  TagMedium,
  primaryMedium,
} from '../../../style/colors';

export const TagListComponent = styled.div`
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;
  ${props => props.customStyle}
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
  background: #E7F8F7;
  border-radius: 2px;
  color: ${primaryMedium};
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9375em;
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
`;

export const TagsInput = styled.li`
  background: none;
  flex-grow: 1;
  padding: 0;
`;

export const TagInput = styled.input`
  background: none;

`;