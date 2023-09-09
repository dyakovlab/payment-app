import {ReactNode} from "react";

export type IBlockConfig = {
  title: string;
  key: string;
  render?: (el: any) => ReactNode;
};

export type ICardProps = {
  blocks: IBlockConfig[];
  item: any;
};
