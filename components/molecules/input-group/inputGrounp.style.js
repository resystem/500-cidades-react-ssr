import styled from "styled-components"
import { error } from "../../../settings/colors";

export const Wrapper  = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  ${props => props.customStyle}
`;

export const RequiredSign = styled.span`
  color: ${error};
  font-size: 0.75em;
  font-family: 'Roboto', sans-serif;
`;

export const Label = styled.label`
  padding-left: 16px;
  font-size: 0.75em;
  font-family: 'Roboto', sans-serif;
  ${props => props.customStyle}
`;

export const Error = styled.span`
  padding-left: 16px;
  padding-top: 4px;
  font-size: 0.75em;
  color: ${error};
  font-family: 'Roboto', sans-serif;
`;
