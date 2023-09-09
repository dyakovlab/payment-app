import Table from '../../components/Table';
import Filter from '../../components/Filter';
import {ICard} from '../../types/dataTypes';
import {Link} from 'react-router-dom';
import {setCardsFilter} from '../../context/actions';
import {FC, useContext, useMemo} from 'react';
import BasePage from '../../layout/BasePage';
import {GlobalStateContext} from '../../context/context';
import {IColumnConfig} from "../../components/Table/types";

const itemsPerPage = 10;

const columns: IColumnConfig[] = [
  {
    title: 'Card ID',
    key: 'cardID'
  },
  {
    title: 'Card Account',
    key: 'cardAccount'
  },
  {
    title: 'Masked Card Number',
    key: 'maskedCardNumber'
  },
  {
    title: 'Expire Date',
    key: 'expireDate',
    render: (el: ICard) => <div>{new Date(el.expireDate).toLocaleDateString()}</div>
  },
  {
    title: 'Currency',
    key: 'currency'
  },
  {
    title: 'Status',
    key: 'status'
  },
  {
    title: 'Balance',
    key: 'balance'
  },
  {
    title: 'Details',
    key: 'details',
    render: (el: ICard) => <Link to={el.cardID}>Card detail</Link>
  }
];

const CardList: FC = () => {
  const [
    {
      cardFilter,
      card: {cards}
    },
    dispatch
  ] = useContext(GlobalStateContext);

  const filteredData = useMemo(() => {
    return cards.filter(item => {
      return (
        (!cardFilter.cardAccount.length ||
          cardFilter.cardAccount.includes(String(item.cardAccount))) &&
        (!cardFilter.cardID.length || cardFilter.cardID.includes(String(item.cardID))) &&
        (!cardFilter.currency.length || cardFilter.currency.includes(String(item.currency))) &&
        (!cardFilter.status.length || cardFilter.status.includes(String(item.status)))
      );
    });
  }, [cards, cardFilter]);

  const filterFields = useMemo(() => {
    const fields = {
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
      currency: {
        title: 'Currency',
        key: 'currency',
        type: 'selectMultiple',
        values: new Map()
      },
      status: {
        title: 'Status',
        key: 'status',
        type: 'select',
        values: new Map()
      }
    };

    filteredData.forEach(item => {
      fields.cardID.values.set(item.cardID, item.cardID);
      fields.cardAccount.values.set(item.cardAccount, item.cardAccount);
      fields.currency.values.set(item.currency, item.currency);
      fields.status.values.set(item.status, item.status);
    });

    return fields;
  }, [filteredData]);

  const filterHandle = (key: string, val: string | string[]) => {
    dispatch(setCardsFilter({...cardFilter, [key]: val}));
  };

  return (
    <BasePage>
      <Filter selectedItems={cardFilter} fields={filterFields} filterHandle={filterHandle} />
      <Table columns={columns} data={filteredData} itemsPerPage={itemsPerPage} />
    </BasePage>
  );
};

export default CardList;
