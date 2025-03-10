
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopInfo from './components/TopInfo.tsx';


const header = createRoot(document.getElementById("header") as Element);
const sidebar = createRoot(document.getElementById("sidebar") as Element);
const root = createRoot(document.getElementById("content") as Element);

header.render(
  <BrowserRouter>
    <p>test</p>
  </BrowserRouter>
)
sidebar.render(
  <BrowserRouter>
  <p>さいどばー</p>
</BrowserRouter>
)
root.render(
  <BrowserRouter>
    <p>HEADER</p>
    <Routes>
      <Route path={`/`} element={<App />} />
      <Route path={`/TopInfo`} element={<TopInfo />} />
    </Routes>
    <p>FOOTER</p>
  </BrowserRouter>
)
