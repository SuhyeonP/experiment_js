import { Route, Routes } from 'react-router-dom';
import Page from 'pages/Page';
import Exception from 'pages/Exception';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/exception" element={<Exception />} />
    </Routes>
  );
};
