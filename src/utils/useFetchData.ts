import { useEffect, useState } from 'react';

import { getData } from './helpers';
import { DataType } from './types';

export const useFetchData = () => {
  const [data, setData] = useState<DataType[]>([]);

  const fetchData = async () => {
    try {
      const list = await getData();
      setData(list);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
};
