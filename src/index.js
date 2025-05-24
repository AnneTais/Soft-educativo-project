import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './Pages/Login/LoginPage';
//import HomePage from './Pages/Home/HomePage';
//import PerfilPage from './Pages/Perfil/PerfilPage';
//import Tela4Page from './Pages/Telas/Tela4Page';
//import Tela5Page from './Pages/Telas/Tela5Page';
//import Tela6Page from './Pages/Telas/Tela6Page';
//import Tela7Page from './Pages/Telas/Tela7Page';
import Tela8Page from './Pages/Telas/Tela8Page';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Tela8Page /> {/* Renderize o componente Login aqui */}
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();