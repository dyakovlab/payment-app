import {ITransaction} from '../types/dataTypes';
import {transactions} from '../mock-data';

export default class TransactionAPIService {
  static async getTransactions(): Promise<ITransaction[]> {
    return transactions;
  }
}
