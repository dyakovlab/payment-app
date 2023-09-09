import Table from '../../components/Table';
import Filter from '../../components/Filter';
import {ITransactionsFilter, ITransaction} from '../../types/dataTypes';
import {Link, useParams} from 'react-router-dom';
import {setTransactionsFilter} from '../../context/actions';
import {FC, useCallback, useContext, useMemo} from 'react';
import BasePage from '../../layout/BasePage';
import {GlobalStateContext} from '../../context/context';
import {IColumnConfig} from "../../components/Table/types";

const itemsPerPage = 10;

const columns: IColumnConfig[] = [
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
  },
  {
    title: 'Details',
    key: 'details',
    render: (el: ITransaction) => <Link to={el.transactionID}>Transaction detail</Link>
  }
];

const initialFilterFields = {
  cardID: {
    title: 'Card ID',
    key: 'cardID',
    type: 'selectMultiple',
    values: new Map()
  },
  cardAccount: {
    title: 'Card Account',
    key: 'cardAccount',
    type: 'selectMultiple',
    values: new Map()
  },
  amount: {
    title: 'Amount',
    key: 'amount',
    type: 'select',
    values: new Map()
  },
  currency: {
    title: 'Currency',
    key: 'currency',
    type: 'selectMultiple',
    values: new Map()
  },
  date: {
    title: 'Date',
    key: 'date',
    type: 'select',
    values: new Map()
  }
};

const TransactionList: FC = () => {
  const {cardID} = useParams();
  const [
    {
      transactionFilter,
      transaction: {transactions}
    },
    dispatch
  ] = useContext(GlobalStateContext);

  const data = useMemo(() => {
    return transactions
      ? cardID
        ? transactions.filter(transaction => transaction.cardID === cardID)
        : transactions
      : [];
  }, [transactions, cardID]);

  const filterData = useCallback(() => {
    return data.filter(item => {
      return Object.keys(transactionFilter).every(key => {
        if (!transactionFilter[key as keyof ITransactionsFilter].length) {
          return true;
        }
        return transactionFilter[key as keyof ITransactionsFilter].includes(
          String(item[key as keyof ITransaction])
        );
      });
    });
  }, [data, transactionFilter]);

  const prepareFilters = useMemo(() => {
    const filterFields = {...initialFilterFields};
    const rawData = cardID ? data : filterData();
    rawData.forEach(item => {
      filterFields.cardID.values.set(item.cardID, item.cardID);
      filterFields.cardAccount.values.set(item.cardAccount, item.cardAccount);
      filterFields.amount.values.set(item.amount, item.amount);
      filterFields.currency.values.set(item.currency, item.currency);
      filterFields.date.values.set(
        new Date(item.transactionDate).toLocaleDateString(),
        new Date(item.transactionDate).toLocaleDateString()
      );
    });

    return filterFields;
  }, [data, cardID, filterData]);

  const filterHandle = useCallback(
    (key: string, val: string[]) => {
      const tempTransactionFilter = {...transactionFilter};
      tempTransactionFilter[key as keyof ITransactionsFilter] = val;
      dispatch(setTransactionsFilter(tempTransactionFilter));
    },
    [dispatch, transactionFilter]
  );

  return (
    <BasePage>
      {!cardID && (
        <Filter
          selectedItems={transactionFilter}
          fields={prepareFilters}
          filterHandle={filterHandle}
        />
      )}
      <Table columns={columns} data={cardID ? data : filterData()} itemsPerPage={itemsPerPage} />
    </BasePage>
  );
};

export default TransactionList;
