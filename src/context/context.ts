import {createContext, Dispatch} from 'react';
import {initialState} from './consts';
import {IRootState} from '../types/dataTypes';

export const GlobalStateContext = createContext<[IRootState, Dispatch<any>]>([
  initialState,
  () => {}
]);
