import cl from './Card.module.css';
import {FC} from 'react';
import {ICardProps} from './types';

const Card: FC<ICardProps> = ({item, blocks}: ICardProps) => {
  return (
    <div className={cl.card}>
      {blocks.map(({key, title, render}) => (
        <div key={key} className={cl.cardRow}>
          <div className={cl.cardRowTitle}>{title}:</div>
          <div>{render ? render(item) : item[key]}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
