import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {publicRoutes, protectedRoutes} from '../../routes';
import {FC, useContext} from 'react';
import {GlobalStateContext} from '../../context/context';

const AppRouter: FC = () => {
  const [
    {
      user: {isLoggedIn}
    }
  ] = useContext(GlobalStateContext);

  const routes = isLoggedIn ? protectedRoutes : publicRoutes;

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
