import {
  LOGIN,
  SET_CARD_FILTER,
  SET_CARDS,
  SET_TRANSACTIONS,
  SET_TRANSACTIONS_FILTER
} from './types';
import {
  IAction,
  IActionCard,
  IActionCardFilter,
  IActionTransaction,
  IActionTransactionFilter,
  IActionUser,
  IRootState
} from '../types/dataTypes';
import {initialState} from './consts';

type IReducerAction =
  | IAction
  | IActionUser
  | IActionCard
  | IActionTransaction
  | IActionTransactionFilter
  | IActionCardFilter;

function globalReducer(state: IRootState = initialState, action: IReducerAction): IRootState {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload};
    case SET_CARDS:
      return {...state, card: action.payload};
    case SET_TRANSACTIONS:
      return {...state, transaction: action.payload};
    case SET_CARD_FILTER:
      return {...state, cardFilter: action.payload};
    case SET_TRANSACTIONS_FILTER:
      return {...state, transactionFilter: action.payload};
    default:
      return state;
  }
}

export default globalReducer;
