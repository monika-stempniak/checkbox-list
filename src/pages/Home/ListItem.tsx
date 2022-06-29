import { useCallback, useContext, useState } from 'react';

import { Checkbox } from '../../components/Checkbox';
import { DataContext } from '../../utils/DataContext';
import { LinkItem, StyledItem } from './ListItem.style';

type ListItemProps = {
  id: number;
  from: string;
  isUnread: boolean;
};

export const ListItem = ({ id, from, isUnread }: ListItemProps) => {
  const { updateData } = useContext(DataContext);
  const [checked, setChecked] = useState(isUnread);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
      updateData(id);
    },
    [id, updateData]
  );

  return (
    <>
      <StyledItem>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          label={<LinkItem to={`/detail/${id}`}>{from}</LinkItem>}
        />
      </StyledItem>
    </>
  );
};
