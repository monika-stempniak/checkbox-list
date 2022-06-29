import { faker } from '@faker-js/faker';

// import data from './data.json';
import { DataType } from './types';

const data = new Array(1000).fill(null).map((_, id) => ({
  id: id + 1,
  from: `${faker.name.findName()} - Onet <mailingi@onet.pl>`,
  sent_date: faker.date.past(1),
  is_unread: false,
  subject: faker.lorem.words(4),
  snippet: faker.lorem.sentences(5),
}));

export const getAsyncData = (): Promise<DataType[]> => {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(JSON.stringify(data)));
    reject('Error');
  });
};
