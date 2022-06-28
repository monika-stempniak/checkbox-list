import data from './data.json';
import { DataType } from './types';

export const getData = (): Promise<DataType[]> => {
  return new Promise((resolve, reject) => {
    if (resolve) {
      resolve(JSON.parse(JSON.stringify(data)));
    } else {
      reject('Error');
    }
  });
};
