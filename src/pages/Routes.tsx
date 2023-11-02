import { Route, Routes } from 'react-router-dom';
import Page from 'pages/Page';
import Exception from 'pages/Exception';
import Timer from 'pages/Timer';
import AnchorTag from 'pages/AnchorTag';
import Hooks from 'pages/Hooks';
import { EventLoop } from 'pages/EventLoop';
import StopEvent from 'pages/StopEvent';
import CSS from 'pages/Css';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/exception" element={<Exception />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/aTag" element={<AnchorTag />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/event-loop" element={<EventLoop />} />
      <Route path="/stop-event" element={<StopEvent />} />
      <Route path="/css" element={<CSS />} />
    </Routes>
  );
};
