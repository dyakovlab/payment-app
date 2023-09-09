export type IFilterConfig = {
  title: string;
  type: string;
  key: string;
  values: Map<any, any>;
};

export type IFilterProps = {
  fields: any;
  selectedItems: any;
  filterHandle: (key: string, val: any) => any;
};
