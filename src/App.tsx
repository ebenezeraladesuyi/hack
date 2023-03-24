import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoutes/AllRoutes';
import UserRoutes from './components/AllRoutes/UserDashRoutes';
import ConsultRoutes from './components/AllRoutes/ConsultDashRoutes';

function App() {
  return (
    <div>

      <AllRoutes />


      <UserRoutes />
      {/* <ConsultRoutes /> */}


    </div>
  );
}

export default App;
