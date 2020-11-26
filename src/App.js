import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/index';
import Login from './pages/Login/index';
import MotherRegister from './pages/MotherRegister/index';

import RiskEvaluation from './pages/RiskEvaluation/index';

function App() {
  const [role, setRole] = useState(LocalStorage.getRole());

  return (
    <div className="App" style={{ width: '100vw' }}>
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
