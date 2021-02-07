import React from 'react';
import { Route } from 'react-router-dom';

// sfc + tab      <--- tworzy komponent funkcyjny

const Footer = () => {
  return (
    <div>
      <h2>stopka</h2>

      <Route path="/" exact render={(props)=>{
        console.log(props)
        return (
          <p>Jestes na stronie głównej</p>
        )
      }}/>

      <Route path="/:page" exact render={(props)=>{
          console.log(props)
          return (
            <>
              <p>Jestes na stronie <span style={{color: 'red'}}>{props.match.params.page}</span></p>
              <p>Jestes na stronie <span style={{color: 'red'}}>{props.match.url}</span></p>
              <p>Jestes na stronie <span style={{color: 'red'}}>{props.match.path}</span></p>
          </>
          )
        }}/>
    </div>
   );
}

export default Footer;
