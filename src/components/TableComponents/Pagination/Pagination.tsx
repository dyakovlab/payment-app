import cl from './Pagination.module.css';
import {FC, useMemo} from 'react';
import {IPaginationProps} from './types';

const Pagination: FC<IPaginationProps> = ({currentPage, pages, setPageHandle}) => {
  const pagesArr = useMemo(() => {
    const array = [];
    for (let i = 1; i <= pages; i++) {
      array.push(
        <div
          key={i}
          onClick={() => setPageHandle(i)}
          className={
            currentPage === i
              ? `${cl.paginationButtonSelected} ${cl.paginationButton}`
              : cl.paginationButton
          }
        >
          {i}
        </div>
      );
    }
    return array;
  }, [currentPage, pages, setPageHandle]);

  return <div className={cl.pagination}>{pagesArr}</div>;
};

export default Pagination;
