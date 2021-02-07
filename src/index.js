import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App.js';
import './styles/index.css';


// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// npm i react-router-dom
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// sfc + tab      <--- tworzy komponent funkcyjny


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ZOBACZ PLIK pages/HOOC/UseLocation.js aby zobaczyć jak wysłac dane w state = { } a potem pages/HOOC/useLocationGetState.js aby zobaczyc jak odebra te dane przesłane w state = { }
// można to przesłac i odebrac zarówno w useHistory jak i w uselocation - useLocation jest minimalnie krotsze bo jest to okrojona wersja useHistory
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
