import React from 'react';

const Login = React.lazy(() => import('../pages/Login'));
const Home = React.lazy(() => import('../pages/Home'));
const TransactionList = React.lazy(() => import('../pages/TransactionList'));
const TransactionDetail = React.lazy(() => import('../pages/TransactionDetail'));
const CardList = React.lazy(() => import('../pages/CardList'));
const CardDetail = React.lazy(() => import('../pages/CardDetail'));

export const publicRoutes = [
  {
    path: '/',
    element: <Login />
  }
];

export const protectedRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/transactions',
    element: <TransactionList />
  },
  {
    path: '/transactions/:transactionID',
    element: <TransactionDetail />
  },
  {
    path: '/transactions/:transactionID/:cardID',
    element: <CardDetail />
  },
  {
    path: '/cards',
    element: <CardList />
  },
  {
    path: '/cards/:cardID',
    element: <CardDetail />
  },
  {
    path: '/cards/:cardID/transactions',
    element: <TransactionList />
  },
  {
    path: '/cards/:cardID/transactions/:transactionID',
    element: <TransactionDetail />
  }
];
