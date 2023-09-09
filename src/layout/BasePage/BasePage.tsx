import NavBar from '../../components/NavBar';
import Breadcrumbs from '../../components/Breadcrumbs';
import {IBasePageProps} from './types';

const BasePage = ({children}: IBasePageProps) => {
  return (
    <div className={'pageComponent'}>
      <NavBar />
      <div className={'pageContent'}>
        <Breadcrumbs />
        {children}
      </div>
    </div>
  );
};

export default BasePage;
