import { useContext, useMemo } from 'react';

import { DataContext } from '../../utils/DataContext';

export const CheckedItems = () => {
  const { data } = useContext(DataContext);

  const checkedItems = useMemo(
    () => data.filter((item) => item.is_unread),
    [data]
  );

  return (
    <div style={{ paddingBottom: '20px' }}>
      Checked elements: <b>{checkedItems.length}</b>
    </div>
  );
};
