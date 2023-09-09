import Card from '../../components/Card';
import {useParams} from 'react-router';
import {ITransaction} from '../../types/dataTypes';
import {Link} from 'react-router-dom';
import {FC, useContext, useMemo} from 'react';
import BasePage from '../../layout/BasePage';
import {GlobalStateContext} from '../../context/context';

const initialTransactionBlocks = [
  {
    title: 'Transaction ID',
    key: 'transactionID'
  },
  {
    title: 'Card Account',
    key: 'cardAccount'
  },
  {
    title: 'Card ID',
    key: 'cardID'
  },
  {
    title: 'Amount',
    key: 'amount'
  },
  {
    title: 'Currency',
    key: 'currency'
  },
  {
    title: 'Transaction Date',
    key: 'transactionDate',
    render: (el: ITransaction) => <div>{new Date(el.transactionDate).toLocaleString()}</div>
  },
  {
    title: 'Merchant Info',
    key: 'merchantInfo'
  }
];

const TransactionDetail: FC = () => {
  const {cardID, transactionID} = useParams();
  const [
    {
      transaction: {transactions}
    }
  ] = useContext(GlobalStateContext);

  const transactionBlocks = useMemo(() => {
    if (!(cardID && transactionID)) {
      return [
        ...initialTransactionBlocks,
        {
          title: 'Card detail',
          key: 'card',
          render: (el: ITransaction) => <Link to={el.cardID}>show</Link>
        }
      ];
    }
    return initialTransactionBlocks;
  }, [cardID, transactionID]);

  const transactionDetail = useMemo(
    () => transactions.find(transaction => transaction.transactionID === transactionID),
    [transactions, transactionID]
  );

  return (
    <BasePage>
      <Card blocks={transactionBlocks} item={transactionDetail} />
    </BasePage>
  );
};

export default TransactionDetail;
