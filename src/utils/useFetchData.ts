import { useCallback, useEffect, useState } from 'react';

import { getAsyncData } from './helpers';
import { DataType } from './types';

type UseFetchDataReturnType = [DataType[], (id: number) => void];

export const useFetchData = (): UseFetchDataReturnType => {
  const [data, setData] = useState<DataType[]>([]);

  const fetchData = async () => {
    try {
      const list = await getAsyncData();
      setData(list);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateData = useCallback(
    (id: number) => {
      const updatedData = data.map((item) => {
        if (id === item.id) {
          return { ...item, is_unread: !item.is_unread };
        }
        return item;
      });

      setData(updatedData);
    },
    [data]
  );

  return [data, updateData];
};
