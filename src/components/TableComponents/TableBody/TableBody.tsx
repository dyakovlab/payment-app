import cl from './TableBody.module.css';
import {FC, useMemo} from 'react';
import {ITableProps} from './types';

const TableBody: FC<ITableProps> = ({data, columns}: ITableProps) => {
  const headerElements = useMemo(() => {
    return columns.map(column => <th key={column.key}>{column.title}</th>);
  }, [columns]);

  const rowElements = useMemo(() => {
    return data.map((row, index) => (
      <tr className={index % 2 === 0 ? cl.darkRow : ''} key={index}>
        {columns.map(column => (
          <td key={column.key}>{column.render ? column.render(row, index) : row[column.key]}</td>
        ))}
      </tr>
    ));
  }, [data, columns]);

  return (
    <div className={cl.table}>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>{headerElements}</tr>
        </thead>
        <tbody>{rowElements}</tbody>
      </table>
    </div>
  );
};

export default TableBody;
