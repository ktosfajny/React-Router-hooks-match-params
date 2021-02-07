import React from 'react';
import {Route, Switch} from 'react-router-dom';

// sfc + tab      <--- tworzy komponent funkcyjny

import img1 from '../images/warszawa.jpeg';
import img2 from '../images/krakow.jpg';
import img3 from '../images/rzeszow.jpg';
import notFound from '../images/404.jpg';

import '../styles/Header.css';

const Header = () => {
  return (
    <>
    <Switch>
      <Route path="/" exact render={()=>(
        <img src={img1}  alt="miasto"/>
      )}/>
      <Route path="/contact" render={()=>(
        <img src={img2}  alt="miasto"/>
      )}/>
        <Route path="/products" render={()=>(
        <img src={img3}  alt="miasto"/>
      )}/>
       <Route path="/product/:id" render={()=>(
        <img src={img2}  alt="miasto"/>
      )}/>
        <Route path="/admin" exact render={()=>(
        <img src={img1}  alt="miasto"/>
      )}/>
       <Route path="/login" exact render={()=>(
        <img src={img1}  alt="miasto"/>
      )}/>
        <Route path="/useHistory" render={()=>(
        <img src={img2}  alt="miasto"/>
      )}/>
        <Route path="/useHistoryBackBtn" render={()=>(
        <img src={img1}  alt="miasto"/>
      )}/>
        <Route path="/useLocation" render={()=>(
        <img src={img2}  alt="miasto"/>
      )}/>
        <Route path="/useLocationGetState" render={()=>(
        <img src={img3}  alt="miasto"/>
      )}/>
      <Route render={()=>(
        <img src={notFound}  alt="miasto"/>
      )}/>
    </Switch>
    </>
   );
}

export default Header;
