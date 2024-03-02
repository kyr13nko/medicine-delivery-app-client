import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));
const ShoppingCard = lazy(() => import('../pages/ShoppingCard'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopping-card" element={<ShoppingCard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
