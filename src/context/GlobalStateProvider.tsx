import {initialState} from './consts';
import globalReducer from './reducer';
import {FC, ReactNode, useReducer} from 'react';
import {GlobalStateContext} from './context';

type GlobalStateProviderProps = {
  children: ReactNode;
};

export const GlobalStateProvider: FC<GlobalStateProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>{children}</GlobalStateContext.Provider>
  );
};
