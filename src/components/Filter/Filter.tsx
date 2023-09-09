import cl from './Filter.module.css';
import {FC, useCallback, useMemo} from 'react';
import {IFilterConfig, IFilterProps} from './types';

const Filter: FC<IFilterProps> = ({fields, filterHandle, selectedItems}: IFilterProps) => {
  const getFilter = useCallback(
    (filterConfig: IFilterConfig) => {
      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        filterHandle(
          filterConfig.key,
          Array.from(e.target.options)
            .filter(option => option.selected)
            .map(item => item.label)
        );
      };

      switch (filterConfig.type) {
        case 'select':
        case 'selectMultiple':
          return (
            <div>
              <select
                name={filterConfig.key}
                value={
                  filterConfig.type === 'selectMultiple'
                    ? selectedItems[filterConfig.key]
                    : selectedItems[filterConfig.key][0]
                }
                onChange={handleChange}
                multiple={filterConfig.type === 'selectMultiple'}
              >
                {Array.from(filterConfig.values.values()).map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          );
        default:
          return <div></div>;
      }
    },
    [filterHandle, selectedItems]
  );

  const renderedFields = useMemo(() => {
    return Object.entries(fields).map((entry, index) => (
      <div key={index}>
        <div className={cl.filterLabel}>{(entry[1] as IFilterConfig).title}</div>
        <div>{getFilter(entry[1] as IFilterConfig)}</div>
      </div>
    ));
  }, [fields, getFilter]);

  return <div className={cl.filter}>{renderedFields}</div>;
};

export default Filter;
