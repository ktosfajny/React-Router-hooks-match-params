import React from 'react';
import { useHistory } from 'react-router-dom'; // importujesz useHistory

const useHistoryBackBtn = () => {


  const history = useHistory(); // używamy useHistory


  const hanleOnClick = () => history.goBack(); // goBack spowoduje przeniesienie na poprzednią podstronę na której byliśmy, w sumie to samo co jakbyś strzałką ( <- ) w przeglarce kliknął i wrócił


  return (
    <div className="UseHistory">

      <h2>useHistoryBackBtn</h2>
      <p>ta strona nie jest widoczna w navigacji bo jej tam nie wpiąłem</p>
      <button onClick={hanleOnClick}>Wróć do poprzedniej strony dzięki useHistory</button>

    </div>
  );
}

export default useHistoryBackBtn;
