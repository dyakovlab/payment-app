import {login, setCards, setTransactions} from '../../context/actions';
import LoginForm from '../../components/LoginForm';
import AuthAPIService from '../../API/authAPI';
import CardAPIService from '../../API/cardAPI';
import TransactionAPIService from '../../API/transactionAPI';
import {FC, SyntheticEvent, useContext} from 'react';
import {ICard, ITransaction, IUser} from '../../types/dataTypes';
import {GlobalStateContext} from '../../context/context';

const Login: FC = () => {
  const [, dispatch] = useContext(GlobalStateContext);
  const loginHandle = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();

    try {
      const [userData, cardData, transactionData] = await Promise.all([
        AuthAPIService.login(),
        CardAPIService.getCards(),
        TransactionAPIService.getTransactions()
      ]);
      dispatch(login(userData as IUser));
      dispatch(setCards(cardData as ICard[]));
      dispatch(setTransactions(transactionData as ITransaction[]));
    } catch (error) {
      console.error('Error during login process', error);
    }
  };

  return (
    <div className={'loginPage'}>
      <LoginForm loginHandle={loginHandle} />
    </div>
  );
};

export default Login;
