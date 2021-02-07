import React from 'react';
import { useHistory } from 'react-router-dom'; // importujesz useHistory

const UseHistory = () => {


  const history = useHistory(); // używamy usehistory

  const handleOnClick = () => { // funkcja która będzie obsługiwala zmianę podstrony po kliknięciu w przycisk

    const location = { // obiekt opcji
      pathname: '/useHistoryBackBtn', // pathname to własicwość która mówi pod jaki adres ma przenieść się strona jak kliknieszw btn
      state: { // jak chcemy przesłac jakiś state to możemy przesłać to używając obiektu state
        isActive: true, // jakiś tam state do przesłania
      },
    }

    history.push(location) // używamy push aby przenieśc stronę na to co ma ten obiekt location w pathname
  }

  return (
    <div className="UseHistory">
      <h1>UseHistory</h1>
      {/* jak klikniesz w ten button to przeniesie cię na podstronę taką jak sobie zdefiniowałeś w tej funkcji */}
      <button onClick={handleOnClick}>idź do useHistoryBackBtn</button>

    </div>
  );
}

export default UseHistory;
