import {Link, useLocation} from 'react-router-dom';
import cl from './NavBar.module.css';
import {FC} from 'react';

const NavBar: FC = () => {
  const location = useLocation();
  const rootSection = location.pathname.split('/')[1];
  const getLinkClass = (section: string) => (rootSection === section ? cl.selected : '');

  return (
    <div className={cl.menu}>
      <Link to="/Home">
        <div className={getLinkClass('')}>Home</div>
      </Link>
      <Link to="/transactions">
        <div className={getLinkClass('transactions')}>Transactions</div>
      </Link>
      <Link to="/cards">
        <div className={getLinkClass('cards')}>Cards</div>
      </Link>
    </div>
  );
};
export default NavBar;
