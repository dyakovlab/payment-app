import {FC, useCallback, useMemo, useState} from 'react';
import Pagination from '../TableComponents/Pagination/Pagination';
import TableBody from '../TableComponents/TableBody/TableBody';
import {ITableProps} from './types';

const Table: FC<ITableProps> = ({data, columns, itemsPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const setPageHandle = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const slicedData = useMemo(() => {
    return itemsPerPage
      ? data.slice(itemsPerPage * currentPage - itemsPerPage, itemsPerPage * currentPage)
      : data;
  }, [data, itemsPerPage, currentPage]);

  const totalPages = useMemo(() => {
    return itemsPerPage ? Math.ceil(data.length / itemsPerPage) : 0;
  }, [data.length, itemsPerPage]);

  return (
    <div>
      <TableBody data={slicedData} columns={columns} />
      {itemsPerPage && itemsPerPage < data.length && (
        <Pagination currentPage={currentPage} pages={totalPages} setPageHandle={setPageHandle} />
      )}
    </div>
  );
};

export default Table;
