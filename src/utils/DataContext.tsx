import { createContext } from 'react';

import { DataType } from '../utils/types';

type DataContextType = {
  data: DataType[];
  updateData: (id: number) => void;
};

export const DataContext = createContext<DataContextType>({
  data: [],
  updateData: () => {},
});
