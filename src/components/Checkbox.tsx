import { useState, ReactNode } from 'react';

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
};

export const Checkbox = ({ checked, label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <CheckboxContainer>
      <label>
        <HiddenCheckbox
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <StyledCheckbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <Label>{label}</Label>
      </label>
    </CheckboxContainer>
  );
};
