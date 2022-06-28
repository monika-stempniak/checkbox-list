import { ReactNode } from 'react';

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  Label,
  StyledCheckbox,
} from './Checkbox.style';

type CheckboxProps = {
  checked: boolean;
  label: ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ checked, label, onChange }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <label>
        <HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <Label>{label}</Label>
      </label>
    </CheckboxContainer>
  );
};
