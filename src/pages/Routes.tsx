import { Route, Routes } from 'react-router-dom';
import Page from 'pages/Page';
import Exception from 'pages/Exception';
import Timer from 'pages/Timer';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/exception" element={<Exception />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
};
