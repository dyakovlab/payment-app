import {ICard} from '../types/dataTypes';
import {cards} from '../mock-data';

export default class CardAPIService {
  static async getCards(): Promise<ICard[]> {
    return cards;
  }
}
