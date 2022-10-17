import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication'
import Database from './pages/Database/Database'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="authentication" element={<Authentication/>} />
        <Route path="database" element={<Database/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
