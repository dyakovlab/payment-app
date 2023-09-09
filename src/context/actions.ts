import {
  LOGIN,
  SET_CARDS,
  SET_TRANSACTIONS,
  SET_CARD_FILTER,
  SET_TRANSACTIONS_FILTER
} from './types';
import {ICard, ICardsFilter, ITransaction, ITransactionsFilter, IUser} from '../types/dataTypes';

export function login(user: IUser) {
  return {
    type: LOGIN,
    payload: {
      user,
      isLoggedIn: true
    }
  };
}

export function setCards(cards: ICard[]) {
  return {
    type: SET_CARDS,
    payload: {cards}
  };
}

export function setTransactions(transactions: ITransaction[]) {
  return {
    type: SET_TRANSACTIONS,
    payload: {transactions}
  };
}

export function setCardsFilter(cardFilter: ICardsFilter) {
  return {
    type: SET_CARD_FILTER,
    payload: cardFilter
  };
}

export function setTransactionsFilter(transactionFilter: ITransactionsFilter) {
  return {
    type: SET_TRANSACTIONS_FILTER,
    payload: transactionFilter
  };
}
