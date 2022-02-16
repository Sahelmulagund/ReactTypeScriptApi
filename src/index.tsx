import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestApp from './TestApp';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import RawJson from './RawJson'

const routing = (
  
  <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/rawJson" element={<RawJson/>}/>
    </Routes>
  </BrowserRouter>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
