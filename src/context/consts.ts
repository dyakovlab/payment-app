import {
  ICardsFilter,
  IInitialCardState,
  ITransactionsFilter,
  IInitialTransactionsState,
  IInitialUserState,
  IRootState
} from '../types/dataTypes';

const initialTransactionsFilterState: ITransactionsFilter = {
  cardID: [],
  cardAccount: [],
  amount: [],
  currency: [],
  date: []
};

const initialTransactionState: IInitialTransactionsState = {
  transactions: []
};

const initialCardsFilterState: ICardsFilter = {
  cardID: [],
  cardAccount: [],
  currency: [],
  status: []
};

const initialCardState: IInitialCardState = {
  cards: []
};

const initialUserState: IInitialUserState = {
  user: null,
  isLoggedIn: false
};

export const initialState: IRootState = {
  user: initialUserState,
  card: initialCardState,
  transaction: initialTransactionState,
  cardFilter: initialCardsFilterState,
  transactionFilter: initialTransactionsFilterState
};
