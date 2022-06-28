import styled from 'styled-components';
import { THEME } from '../utils/theme';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: ${({ checked }) => (checked ? THEME.main : '#fff')};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.1s;
  border: 1px solid black;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const Label = styled.span`
  margin-left: 10px;
`;
