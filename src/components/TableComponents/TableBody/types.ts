import {ReactNode} from "react";

export type columnConfig = {
  title: string;
  key: string;
  render?: (el: any, key: number) => ReactNode;
};

export type ITableProps = {
  data: any[];
  columns: columnConfig[];
};
