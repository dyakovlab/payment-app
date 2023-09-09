import Card from '../../components/Card';
import {Link, useParams} from 'react-router-dom';
import {ICard} from '../../types/dataTypes';
import BasePage from '../../layout/BasePage';
import {useContext, useMemo} from 'react';
import {GlobalStateContext} from '../../context/context';

const CardDetail = () => {
  const {cardID, transactionID} = useParams();
  const [
    {
      card: {cards}
    }
  ] = useContext(GlobalStateContext);

  const selectedCard = useMemo(() => {
    return cards.find(card => card.cardID === cardID);
  }, [cards, cardID]);

  const cardBlocks = useMemo(() => {
    const blocks = [
      {title: 'Card ID', key: 'cardID'},
      {title: 'Card Account', key: 'cardAccount'},
      {title: 'Masked Card Number', key: 'maskedCardNumber'},
      {
        title: 'Expire Date',
        key: 'expireDate',
        render: (el: ICard) => <div>{new Date(el.expireDate).toLocaleDateString()}</div>
      },
      {title: 'Currency', key: 'currency'},
      {title: 'Status', key: 'status'},
      {title: 'Balance', key: 'balance'}
    ];

    if (!(transactionID && cardID)) {
      blocks.push({
        title: 'Transactions',
        key: 'transactions',
        render: () => <Link to={'transactions'}>Show</Link>
      });
    }

    return blocks;
  }, [transactionID, cardID]);

  return (
    <BasePage>
      <Card blocks={cardBlocks} item={selectedCard} />
    </BasePage>
  );
};

export default CardDetail;
