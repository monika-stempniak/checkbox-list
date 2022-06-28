import { useCallback, useMemo, useState } from 'react';
import {
  ContentContainer,
  PageContainer,
  PageTitle,
} from '../components/Common.style';
import { ListItem } from '../components/ListItem';
import { DataType } from '../utils/types';

type HomePageProps = {
  data: DataType[];
  updateData: (id: number) => void;
};

export const HomePage = ({ data, updateData }: HomePageProps) => {
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
              updateData={updateData}
            />
          ))}
        </ul>
      </ContentContainer>
    </PageContainer>
  );
};
