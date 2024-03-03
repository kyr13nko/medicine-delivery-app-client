import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Layout from './Layout/Layout';

const Shop = lazy(() => import('../pages/Shop'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCart'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
