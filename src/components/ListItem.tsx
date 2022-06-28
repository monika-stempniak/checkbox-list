import { Checkbox } from '../components/Checkbox';
import { DataType } from '../utils/types';
import { LinkItem, StyledItem } from './ListItem.style';

type ListItemProps = {
  item: DataType;
};

export const ListItem = ({ item }: ListItemProps) => {
  const { id, from, is_unread } = item;

  return (
    <>
      <StyledItem>
        <Checkbox
          checked={is_unread}
          label={<LinkItem to={`/detail/${id}`}>{from}</LinkItem>}
        />
      </StyledItem>
    </>
  );
};
