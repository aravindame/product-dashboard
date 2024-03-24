import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import { NotFound } from './components/pages';

interface RouterProps {
  children?: React.ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
};

export default Router;
