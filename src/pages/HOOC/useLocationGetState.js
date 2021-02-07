import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useLocationGetState = () => {


  const history = useHistory();
  const hanleOnClick = () => history.goBack();




  // - - - - - RZECZY ZWIĄZANE Z useLocation - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const location = useLocation(); // używamy useLocation

  const isActive = Boolean(location.state && location.state.isActive); // pobieramy wartośc isActive ze state przesłanego dzięki useHistory z pliku Uselocation.js


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // można odebrać stan również dzieku useHistory - wystarczy napisać history.location
  const isActive2 = Boolean(history.location.state && history.location.state.isActive);


  return (
    <div className="UseHistory">
      <h2>useLocationGetState</h2>

      {/*  - - - - - - - - - - --- - - -- - - - -- - - - -- - - - - - - - - - - - - - - - - - - - - - - --  */}

      {/* wyswietlamy odebraną wartość za pomocą useLocation ze state */}
      <p>inforamcja IsActive Przesłana ze statu wynosi: {String(isActive)}<span style={{ marginLeft: '20px' }}>   //dzięki useLocation</span></p>

      {/* wyswietlamy odebraną wartość za pomocą useHistory ze state */}
      <p>inforamcja IsActive Przesłana ze statu wynosi: {String(isActive2)}<span style={{ marginLeft: '20px' }}>   //dzięki useHistory</span></p>


      {/*  - - - - - - - - - - --- - - -- - - - -- - - - -- - - - - - - - - - - - - - - - - - - - - - - --  */}


      <p>ta strona nie jest widoczna w navigacji bo jej tam nie wpiąłem</p>
      <button onClick={hanleOnClick}>Wróć do poprzedniej strony dzięki useHistory</button>

    </div>
  );
}

export default useLocationGetState;
