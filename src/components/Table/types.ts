import {ICard, ITransaction} from "../../types/dataTypes";
import {ReactNode} from "react";

export type IColumnConfig = {
  title: string;
  key: string;
  render?: (el: any, key: number) => ReactNode;
};

export type ITableProps = {
  data: ICard[] | ITransaction[];
  columns: IColumnConfig[];
  itemsPerPage?: number;
};
