import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Header from './components/Header';

import App from './App';

import Developer from './components/developer/Developer';
import Usage from './components/developer/Usage';

import Creator from './components/cc/Creator';
import Boost from './components/cc/Boost';

import Profile from './components/Profile';

import Login from './components/Login';
import Register from './components/Register';

import Checkout from './components/paymentPortal/Checkout';
import Cancel from './components/paymentPortal/Cancel';
import Success from './components/paymentPortal/Success';

import AdminCollections from './components/admin/AdminCollections';
import AdminLogin from './components/admin/AdminLogin';
import AdminContents from './components/admin/AdminContents';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />
        
        <Route path='/developers' element={<Developer />} />
        <Route path='/developers/usage' element={<Usage/>}></Route>

        <Route path='/creators' element={<Creator/>}/>
        <Route path='/creators/boost' element={<Boost/>}/>
        
        <Route path='/profile' element={<Profile /> }/>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
        <Route path='/success' element={<Success/>}/>

        <Route path='/admin/' element={<AdminLogin/>}/>
        <Route path='/admin/collections' element={<AdminCollections/>}/>
        <Route path='/admin/contents' element={<AdminContents/>}/>

      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
