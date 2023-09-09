import {ICard, ITransaction, IUser} from './types/dataTypes';
import Helper from './classes/Helper';

interface IMockData {
  cards: ICard[];
  transactions: ITransaction[];
}

function generate() {
  const result: IMockData = {
    cards: [],
    transactions: []
  };

  for (let i = 0; i < Helper.getRandomIntInInterval(50, 180); i++) {
    if (i % 4 === 0) {
      result.cards.push({
        cardID: Helper.getRandomIntInInterval(1, 9000000000).toString(),
        cardAccount: Helper.getRandomIntInInterval(1000, 90000),
        maskedCardNumber: Helper.getRandomIntInInterval(100000, 9000000),
        expireDate: new Date(+new Date() + Math.floor(Math.random() * 10000000000)).toISOString(),
        currency: ['AZN', 'EUR', 'USD'][Helper.getRandomIntInInterval(0, 2)],
        status: ['blocked', 'active'][Helper.getRandomIntInInterval(0, 1)],
        balance: Helper.getRandomIntInInterval(0, 999999).toString()
      });
    }

    const randomCard = result.cards[Helper.getRandomIntInInterval(0, result.cards.length - 1)];
    result.transactions.push({
      transactionID: Helper.getRandomIntInInterval(9000000001, 1000000000000).toString(),
      cardAccount: randomCard.cardAccount,
      cardID: randomCard.cardID,
      amount: Helper.getRandomIntInInterval(0, 999999).toString(),
      currency: randomCard.currency,
      transactionDate: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      ).toISOString(),
      merchantInfo: Helper.getRandomString(Helper.getRandomIntInInterval(1, 5))
    });
  }

  return result;
}

const data = generate();

export const user: IUser = {
  id: '4df6d4vdv4d5',
  login: 'user',
  name: 'Name'
};

export const cards: ICard[] = data.cards;
export const transactions: ITransaction[] = data.transactions;
