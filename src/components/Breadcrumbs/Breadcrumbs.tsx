import {Link, useLocation} from 'react-router-dom';
import cl from './Breadcrumbs.module.css';
import Helper from '../../classes/Helper';
import {FC, useMemo} from 'react';

const Breadcrumbs: FC = () => {
  const location = useLocation();
  const breadcrumbs = useMemo(() => Helper.getBreadcrumbs(location.pathname), [location.pathname]);

  return (
    <div className={cl.breadcrumbs}>
      {breadcrumbs.map((item, index) => (
        <div key={index}>
          {item.link.length ? <Link to={item.link}>{item.title}</Link> : <div>{item.title}</div>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
