export type ICard = {
  cardID: string;
  cardAccount: number;
  maskedCardNumber: number;
  expireDate: string;
  currency: string;
  status: string;
  balance: string;
};

export type ITransaction = {
  transactionID: string;
  cardAccount: number;
  cardID: string;
  amount: string;
  currency: string;
  transactionDate: string;
  merchantInfo: string;
};

export type IUser = {
  id: string;
  login: string;
  name: string;
};

export type IRootState = {
  user: {
    isLoggedIn: boolean;
    user: IUser | null;
  };
  transaction: IInitialTransactionsState;
  card: IInitialCardState;
  transactionFilter: ITransactionsFilter;
  cardFilter: ICardsFilter;
};

export type IInitialUserState = {
  user: IUser | null;
  isLoggedIn: boolean;
};

export type IInitialTransactionsState = {
  transactions: ITransaction[];
};

export type IInitialCardState = {
  cards: ICard[];
};

export type ITransactionsFilter = {
  cardID: string[];
  cardAccount: string[];
  amount: string[];
  currency: string[];
  date: string[];
};

export type ICardsFilter = {
  cardID: string[];
  cardAccount: string[];
  currency: string[];
  status: string[];
};

export interface IAction {
  payload: any;
  type: string;
}

export interface IActionUser extends IAction {
  payload: IUser;
}

export interface IActionTransaction extends IAction {
  payload: ITransaction[];
}

export interface IActionCard extends IAction {
  payload: ICard[];
}

export interface IActionTransactionFilter extends IAction {
  payload: ITransactionsFilter;
}

export interface IActionCardFilter extends IAction {
  payload: ICardsFilter;
}
