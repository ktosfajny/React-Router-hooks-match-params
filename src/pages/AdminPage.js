import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const permission = false;




const AdminPAge = () => {


  return (
    <Route render={() => (
      permission
        ? (<h3>Panel admina -dzien dobry</h3>)
        : <Redirect to="/login" />
    )} />
  );
}

export default AdminPAge;
