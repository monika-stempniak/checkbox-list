import { useCallback, useContext, useMemo } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import {
  ContentContainer,
  PageContainer,
  PageTitle,
} from '../../components/Common.style';
import { ListItem } from './ListItem';
import { DataContext } from '../../utils/DataContext';
import { DataType } from '../../utils/types';
import { CheckedItems } from './CheckedItems';

export const HomePage = () => {
  const { data } = useContext(DataContext);

  const Row = useCallback(
    ({ index, style }: ListChildComponentProps<DataType[]>) => {
      const row = data[index];
      return (
        <div key={row.id} style={style}>
          <ListItem id={row.id} from={row.from} isUnread={row.is_unread} />
        </div>
      );
    },
    [data]
  );

  return (
    <PageContainer>
      <PageTitle>Home Page</PageTitle>
      <CheckedItems />
      <ContentContainer>
        <List width={450} height={800} itemCount={data.length} itemSize={50}>
          {Row}
        </List>
      </ContentContainer>
    </PageContainer>
  );
};
