import { Route, Routes } from 'react-router-dom';
import Page from 'pages/Page';
import CSS from 'pages/css/Css';
import Javascript from 'pages/javascript/Javascript';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/css" element={<CSS />} />
      <Route path="/js" element={<Javascript />} />
    </Routes>
  );
};
