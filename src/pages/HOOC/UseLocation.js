import React from 'react';
import { useHistory } from 'react-router-dom';

const UseLocation = () => {


  // w tym pliku mamy button który przesle nas do useLocationGetState i tam też odbierzemy ten state któy tutaj przesyłamy bo w useHistoryBackBtn nie dobieraliśmy

  const history = useHistory();

  const handleOnClick = () => {

  const location = {
    pathname: '/useLocationGetState',
    state: {
      isActive: true,
    },
  }

  history.push(location)
}

return (
  <div className="UseLocation">
    <h1>UseLocation</h1>
    <p>to jest UseLocation ale działa na usehistory, tzn przesyła state i ten state odbierany jest w useLocationGetState</p>
    {/* jak klikniesz w ten button to przeniesie cię na podstronę taką jak sobie zdefiniowałeś w tej funkcji */}
    <button onClick={handleOnClick}>idź do useLocationGetState</button>

  </div>
);
}

export default UseLocation;
