import {user} from '../mock-data';
import {IUser} from '../types/dataTypes';

export default class AuthAPIService {
  static async login(): Promise<IUser> {
    return user;
  }
}
