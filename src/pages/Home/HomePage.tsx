import { useContext, useMemo } from 'react';

import {
  ContentContainer,
  PageContainer,
  PageTitle,
} from '../../components/Common.style';
import { ListItem } from './ListItem';
import { DataContext } from '../../utils/DataContext';

export const HomePage = () => {
  const { data } = useContext(DataContext);

  const checkedItems = useMemo(
    () => data.filter((item) => item.is_unread),
    [data]
  );

  return (
    <PageContainer>
      <PageTitle>Home Page</PageTitle>
      <div>
        Checked elements: <b>{checkedItems.length}</b>
      </div>
      <ContentContainer>
        <ul>
          {data.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              from={item.from}
              isUnread={item.is_unread}
            />
          ))}
        </ul>
      </ContentContainer>
    </PageContainer>
  );
};
