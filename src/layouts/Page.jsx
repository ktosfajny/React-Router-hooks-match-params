import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';


import UseHistory from '../pages/HOOC/UseHistory';
import useHistoryBackBtn from '../pages/HOOC/useHistoryBackBtn';

import UseLocation from '../pages/HOOC/UseLocation';
import useLocationGetState from '../pages/HOOC/useLocationGetState';


// sfc + tab      <--- tworzy komponent funkcyjny

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/products" component={ProductListPage}/>
        <Route path="/product/:id" component={ProductPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/login" component={LoginPage}/>

        <Route path="/useHistory" component={UseHistory}/>
        <Route path="/useHistoryBackBtn" component={useHistoryBackBtn}/>

        {/* useLocation */}
        <Route path="/useLocation" component={UseLocation}/>
        <Route path="/useLocationGetState" component={useLocationGetState}/>

        <Route component={ErrorPage}/>
      </Switch>
    </>
   );
}

export default Page;
