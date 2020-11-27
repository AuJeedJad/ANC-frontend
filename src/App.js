import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes';
import LocalStorage from './services/localStorage';
import CurrentPregContext from './context/CurrentPregContext';

import RiskEvaluation from './pages/RiskEvaluation/index';

function App() {
  const [mother, setMother] = useState({ currentPregId: '', idCard: '', Name: '', lastName: '', GA: 0 });
  const [role, setRole] = useState(LocalStorage.getRole());

  return (
    <div className="App" style={{ width: '100vw' }}>
      <CurrentPregContext.Provider value={{ mother, setMother }}>
        <PrivateRoutes role={role} setRole={setRole} />
      </CurrentPregContext.Provider>
    </div>
  );
}

export default App;
