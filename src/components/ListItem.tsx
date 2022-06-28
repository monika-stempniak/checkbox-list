import { useCallback, useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import { LinkItem, StyledItem } from './ListItem.style';

type ListItemProps = {
  id: number;
  from: string;
  isUnread: boolean;
  updateData: (id: number) => void;
};

export const ListItem = ({ id, from, isUnread, updateData }: ListItemProps) => {
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
