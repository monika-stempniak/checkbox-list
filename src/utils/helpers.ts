import data from './data.json';
import { DataType } from './types';

export const getData = (): Promise<DataType[]> => {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(JSON.stringify(data)));
    reject('Error');
  });
};
